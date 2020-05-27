const express = require("express");
const Workout = require("../../models/Workout");
const router = express.Router();
const auth = require("../../middleware/auth");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

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

const setNewAverage = (workoutId) => {
	Workout.aggregate(
		[
			{
				$match: {
					_id: ObjectId(workoutId)
				}
			},
			{ $unwind: "$reviews" },
			{ $group: { _id: "$_id", avgScore: { $avg: "$reviews.grade" } } }
		],
		async (err, result) => {
			if (err) {
				console.log(err);
				return;
			}

			let newAvg = result[0].avgScore.toFixed(2);

			await Workout.updateOne(
				{ _id: ObjectId(workoutId) },
				{ averageGrade: newAvg }
			);
		}
	);
};

// @route   POST api/workouts/{id}
// @desc    Add a review
// @access  Private

// TODO add auth
router.post("/:workoutId", async (req, res) => {
	const { rating, comment, userId } = req.body;
	const workoutId = req.params.workoutId;

	try {
		let review = {
			grade: rating,
			comment: comment,
			user: userId
		};

		let updatedModel = await Workout.findByIdAndUpdate(
			workoutId,

			{ $push: { reviews: review } },

			{ upsert: true }
		);

		setNewAverage(workoutId);

		res.status(200).send({ message: "All good :)" });
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;
