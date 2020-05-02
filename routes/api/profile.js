const express = require("express");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const router = express.Router();
const auth = require("../../middleware/auth");

// @route   GET api/profile/me
// @desc    Get current user's profile
// @access  Private
router.get("/me", auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user: req.user.id,
		}).populate("user", ["firstName", "lastName", "avatar"]);

		if (!profile) {
			return res
				.status(400)
				.json({ msg: "Ne postoji profil za ovog korisnika" });
		}

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
