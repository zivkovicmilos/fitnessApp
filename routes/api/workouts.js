const express = require("express");
const Workout = require("../../models/Workout");
const router = express.Router();
const auth = require("../../middleware/auth");

// @route   GET api/workouts/{type}
// @desc    Get all workouts of a certain type
// @access  Public
router.get("/type/:type", async (req, res) => {
	try {
		var searchType = req.params.type.replace(/-/g, " ");
		const workouts = await Workout.find({
			type: searchType
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

// @route   GET api/workouts/{id}
// @desc    Get a specific workout
// @access  Public
router.get("/id/:id", async (req, res) => {
	try {
		var searchID = req.params.id.replace(/-/g, " ");
		const workout = await Workout.findById(searchID);

		if (!workout) {
			return res.status(400).json({ msg: "Ne postoji ovaj trening!" });
		}

		res.json(workout);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
