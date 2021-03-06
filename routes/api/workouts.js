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
			return res.status(400).json({ msg: "No workouts of this type exist" });
		}

		res.json(workouts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   GET api/workouts/participants/{name}
// @desc    Get the participants of a certain workout
// @access  Public
router.get("/participants/:name", async (req, res) => {
	try {
		const workout = await Workout.find({ picture: req.params.name })
			.select("-_id")
			.select("-name")
			.select("-picture")
			.select("-descriptionSR")
			.select("-descriptionEN")
			.select("-duration")
			.select("-level")
			.select("-gallery")
			.select("-reviews")
			.select("-type")
			.select("-averageGrade")
			.select("-maxSlots");

		if (!workout) {
			return res.status(400).json({ msg: "Workout doesn't exist" });
		}

		res.json(workout);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   GET api/workouts/id/{id}
// @desc    Get a specific workout
// @access  Public
router.get("/id/:id", async (req, res) => {
	try {
		var searchID = req.params.id.replace(/-/g, " ");
		const workout = await Workout.findById(searchID);

		if (!workout) {
			return res.status(400).json({ msg: "Workout doesn't exist" });
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
router.post("/:workoutId", auth, async (req, res) => {
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

// @route   GET api/workouts/top
// @desc    Get the top 3 workouts
// @access  Public
router.get("/top", async (req, res) => {
	try {
		Workout.aggregate(
			[
				{
					$sort: {
						averageGrade: -1
					}
				},
				{
					$project: {
						_id: 0,
						name: 1,
						picture: 1,
						descriptionSR: 1,
						descriptionEN: 1,
						averageGrade: 1
					}
				},
				{
					$limit: 3
				}
			],
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}

				res.json(result);
			}
		);
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;
