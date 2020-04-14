const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

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
			min: 6,
		}),
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
				res.status(400).json({ errors: [{ msg: "Korisnik već postoji" }] });
			}

			// Get the Gravatar
			const avatar = gravatar.url(email, {
				s: "200",
				r: "pg",
				d: "mm",
			});

			user = new User({
				firstName,
				lastName,
				email,
				avatar,
				password,
			});

			// Encrypt the password
			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			// Return the jsonwebtoken

			res.send("User created!");
		} catch (err) {
			console.log(err.message);
			res.status(500).send("Server error");
		}
	}
);

module.exports = router;
