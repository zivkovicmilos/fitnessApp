const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post(
	"/",
	[
		// Check user input
		check("firstName", "Ime je obavezno").not().isEmpty(),
		check("lastName", "Prezime je obavezno").not().isEmpty(),
		check("email", "Mejl adresa je obavezna").isEmail(),
		check("password", "Šifra mora sadržati 6 ili više znakova").isLength({
			min: 6
		})
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { firstName, lastName, email, password } = req.body;

		try {
			// Check if the user exists
			let user = await User.findOne({ email: email });

			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Korisnik već postoji" }] });
			}

			// Get the Gravatar
			const avatar = gravatar.url(email, {
				s: "200",
				r: "pg",
				d: "mm"
			});

			user = new User({
				firstName,
				lastName,
				email,
				avatar,
				password
			});

			// Encrypt the password
			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payLoad = {
				user: {
					id: user.id
				}
			};

			jwt.sign(
				payLoad,
				config.get("jwtSecret"),
				{
					expiresIn: 360000
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.log(err.message);
			res.status(500).send("Server error");
		}
	}
);

// @route   GET api/users/{id}
// @desc    Get a specific user's profile
// @access  Public
router.get("/:id", async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
			.select("-_id")
			.select("-password")
			.select("-email")
			.select("-lastName")
			.select("-workouts")
			.select("-date");

		if (!user) {
			return res
				.status(400)
				.json({ msg: "Ne postoji profil za ovog korisnika" });
		}

		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   POST api/users/newWorkout
// @desc    Reserves a workout
// @access  Private
router.post("/newWorkout", async (req, res) => {
	const { userID, title, date, day, time } = req.body;

	try {
		let workoutRes = await Workout.findOne({ name: title });

		if (!workoutRes) {
			return res.status(400).json({ msg: "Ne postoji ovaj trening" });
		}

		let workout = {
			workoutID: workoutRes._id,
			title: title,
			date: date,
			day: Number(day),
			time: time
		};

		let updatedModel = await User.findByIdAndUpdate(
			userID,

			{ $push: { workouts: workout } },

			{ upsert: true }
		);

		res.status(200).send({ message: "All good :)" });
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;
