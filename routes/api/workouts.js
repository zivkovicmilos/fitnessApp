const express = require("express");
const Workout = require("../../models/Workout");
const router = express.Router();
const auth = require("../../middleware/auth");

// @route   GET api/workouts/{type}
// @desc    Get current user's profile
// @access  Private
router.get("/:type", async (req, res) => {
	try {
		var searchType = req.params.type.replace(/-/g, " ");
		const workouts = await Workout.find({
			type: searchType,
		});

		if (!workouts || !workouts.length) {
			return res.status(400).json({ msg: "Ne postoje treninzi ovog tipa!" });
		}

		res.json(workouts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
