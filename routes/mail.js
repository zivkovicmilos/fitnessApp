const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: "4ricepsfitness@gmail.com",
		pass: "jzxmvzbxhxfqylzz" // generated ethereal password
	}
});

// @route   POST mail
// @desc    Send the contact email
// @access  Public
router.post("/", async (req, res) => {
	const { name, email, message } = req.body;
	console.log("Sending mail...");

	const mailOptions = {
		from: '"QuadricepsFitness" <4ricepsfitness@gmail.com>',
		to: "4ricepsfitness@gmail.com",
		subject: "Contact Form - " + name,
		text: name + ", " + email + "\n" + "\n" + message
	};

	try {
		await transporter.sendMail(mailOptions);
	} catch (err) {
		console.log(err);
		return res.status(400).json("Failed to send mail");
	}

	return res.status(200).json("Mail sent!");
});

module.exports = router;
