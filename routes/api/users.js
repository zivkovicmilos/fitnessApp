const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/auth");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post(
	"/",
	[
		// Check user input
		check("firstName", "First name is required").not().isEmpty(),
		check("lastName", "Last name is required").not().isEmpty(),
		check("email", "Email is required").isEmail(),
		check("password", "Password has to be a min. of 6 chars").isLength({
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
					.json({ errors: [{ msg: "User already exists" }] });
			}

			// Get the Gravatar
			const avatar = gravatar.url(email, {
				s: "200",
				r: "pg",
				d: "mm"
			});

			let workouts = [];

			user = new User({
				firstName,
				lastName,
				email,
				avatar,
				password,
				workouts
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
			return res.status(400).json({ msg: "User does not exist" });
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
router.post("/newWorkout", auth, async (req, res) => {
	const { userID, title, date, day, time } = req.body;

	try {
		let workoutRes = await Workout.findOne({ name: title });

		if (!workoutRes) {
			return res.status(400).json({ msg: "Workout doesn't exist" });
		}

		let workout = {
			workoutID: workoutRes._id,
			title: title,
			date: date,
			day: Number(day),
			time: time
		};

		// Check if the user has already reserved this workout
		let user = await User.findById(userID);

		for (let i = 0; i < user.workouts.length; i++) {
			let workout = user.workouts[i];

			if (
				workout.workoutID.equals(workoutRes._id) &&
				workout.time === time &&
				date === workout.date
			) {
				// User has this already reserved!
				try {
					return res.status(400).json({ msg: "Already reserved!" });
				} catch (err) {
					console.log(err);
				}
			}
		}

		let updatedModel = await User.findByIdAndUpdate(
			userID,

			{ $push: { workouts: workout } },

			{ upsert: true }
		);

		updatedModel = await Workout.findByIdAndUpdate(
			workoutRes._id,

			{
				$inc: {
					participants: 1
				}
			},
			{ upsert: true }
		);

		res.status(200).send({ message: "All good :)" });
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server error");
	}
});

// @route   POST api/users/delete
// @desc    Deletes the user
// @access  Private
router.post("/delete", auth, async (req, res) => {
	const { userID } = req.body;

	try {
		// Delete the user from the users collection
		await User.findByIdAndDelete(userID, (err) => {
			if (err) console.log(err);
			console.log("User deleted successfully");
		});

		// Delete each review that the user has made

		let updatedModel = await Workout.updateMany(
			{},

			{
				$pull: {
					reviews: {
						user: userID
					}
				}
			},

			{ upsert: true }
		);
		console.log("Deleted the user's reservations");

		res.status(200).send({ message: "All good :)" });
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server error");
	}
});

// @route   POST api/users/update
// @desc    Updates a user's credentials
// @access  Private
router.post("/update", auth, async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	try {
		let user = await User.findOne({ email: email });

		if (!user) {
			return res.status(400).json({ msg: "User does not exist" });
		}

		if (password != "") {
			// User wants to update the password

			// Encrypt the password
			const salt = await bcrypt.genSalt(10);

			let newPassword = await bcrypt.hash(password, salt);
			let updatedModel = await User.findByIdAndUpdate(
				user.id,

				{ firstName: firstName, lastName: lastName, password: newPassword },

				{ upsert: true }
			);
		} else {
			let updatedModel = await User.findByIdAndUpdate(
				user.id,

				{ firstName: firstName, lastName: lastName },

				{ upsert: true }
			);
		}

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
});

// @route   POST api/users/delete/{workout}
// @desc    Deletes a user's reservation
// @access  Private
router.post("/delete/:email/:workoutID", auth, async (req, res) => {
	const { workoutTime } = req.body;
	const { workoutDate } = req.body;

	const email = req.params.email;
	const workoutID = req.params.workoutID;

	try {
		let user = await User.findOne({ email: email });

		if (!user) {
			return res.status(400).json({ msg: "User does not exist" });
		}

		let updatedModel = await User.findByIdAndUpdate(
			user.id,

			{
				$pull: {
					workouts: {
						workoutID: workoutID,
						date: workoutDate,
						time: workoutTime
					}
				}
			},

			{ upsert: true }
		);

		updatedModel = await Workout.findByIdAndUpdate(
			workoutID,

			{
				$inc: {
					participants: -1
				}
			},
			{ upsert: true }
		);

		res.status(200).send({ message: "All good :)" });
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;
