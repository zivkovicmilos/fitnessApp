const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	reservations: [
		{
			reservedWorkout: {
				time: {
					type: String,
				},
				date: {
					type: String,
				},
				workout: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "workout",
				},
			},
		},
	],
	finishedWorkouts: [
		{
			workout: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "workout",
			},
		},
	],
});

module.exports = Profile = mongoose.model("profile", UserSchema);
