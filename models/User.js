const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	},
	workouts: {
		workoutID: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "workout"
		},
		date: {
			type: String
		},
		day: {
			type: Number
		},
		time: {
			type: String
		}
	}
});

module.exports = User = mongoose.model("user", UserSchema);
