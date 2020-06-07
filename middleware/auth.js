const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
	// Grab the token from the header
	const token = req.header("x-auth-token");

	// Check for the token
	if (!token) {
		return res.status(401).json({ msg: "Invalid token!" });
	}

	try {
		const decoded = jwt.verify(token, config.get("jwtSecret"));

		req.user = decoded.user; // User is attached to the payload
		next();
	} catch (err) {
		res.status(401).json({ msg: "Invalid token!" });
	}
};
