const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	picture: {
		type: String,
		required: true
	},
	descriptionSR: {
		type: String,
		required: true
	},
	descriptionEN: {
		type: String
	},
	duration: {
		type: Number, // in multiples of 30min
		requried: true
	},
	level: {
		type: Number, // 1-5
		required: true
	},
	gallery: {
		type: [String]
	},
	reviews: {
		grade: {
			type: Number,
			required: true
		},
		comment: {
			type: String
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user"
		}
	},
	averageGrade: {
		type: Number
	},
	type: {
		type: String,
		required: true
	},
	maxSlots: {
		type: Number
	},
	participants: {
		type: Number
	}
});

module.exports = Workout = mongoose.model("workout", WorkoutSchema);
