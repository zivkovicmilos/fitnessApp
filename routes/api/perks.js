const express = require("express");
const Perk = require("../../models/Perk");
const router = express.Router();
const auth = require("../../middleware/auth");

// @route   GET api/perks
// @desc    Get all perks
// @access  Public
router.get("/", async (req, res) => {
	try {
		const perks = await Perk.find();

		if (!perks || !perks.length) {
			return res.status(400).json({ msg: "Ne postoje pogodnosti!" });
		}

		res.json(perks);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
