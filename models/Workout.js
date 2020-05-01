const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	picture: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	duration: {
		type: Number, // in multiples of 30min
		requried: true,
	},
	level: {
		type: Number, // 1-5
		required: true,
	},
	gallery: {
		type: [String],
		required: true,
	},
	reviews: {
		grade: {
			type: Number,
			required: true,
		},
		averageGrade: {
			type: Number,
		},
		comment: {
			type: String,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
	},
	type: {
		type: String,
		required: true,
	},
});

module.exports = Workout = mongoose.model("workout", WorkoutSchema);
