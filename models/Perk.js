const mongoose = require("mongoose");

const PerkSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	items: {
		type: [String],
		required: true
	}
});

module.exports = Perk = mongoose.model("perk", PerkSchema);
