const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @route   GET api/auth
// @desc    Get user info
// @access  Public
router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server error");
	}
});

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post(
	"/",
	[
		// Check user input
		check("email", "Mejl adresa je obavezna").isEmail(),
		check("password", "Šifra je obavezna znakova").exists()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		console.log("Email: " + email + ", password: " + password);

		try {
			// Check if the user exists
			let user = await User.findOne({ email: email });

			if (!user) {
				return res.status(400).json({ errors: [{ msg: "Neispravni podaci" }] });
			}

			const payLoad = {
				user: {
					id: user.id
				}
			};

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res.status(400).json({ errors: [{ msg: "Neispravni podaci" }] });
			}

			console.log("Authenticating...");

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

module.exports = router;
