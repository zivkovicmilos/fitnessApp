import React, { useContext } from "react";
import send from "../../assets/svg/send.svg";
import { store } from "./../context/Store";
import { sr, en } from "./../../dict";

const ContactMail = () => {
	const globalState = useContext(store);
	let { lang } = globalState.state;

	return (
		<form className="contactForm">
			<div className="form-row">
				<div className="form-group mr-3">
					<label for="imePrezime">
						{lang == "sr"
							? sr.contactMail.contactName
							: en.contactMail.contactName}
					</label>
					<input
						type="text"
						className="form-control credentials minContactForm"
						id="imePrezime"
					/>
				</div>
			</div>
			<div className="form-row">
				<div className="form-group mr-3">
					<label for="eMail">E-mail</label>
					<input
						type="text"
						className="form-control credentials minContactForm"
						id="eMail"
					/>
				</div>
			</div>
			<div className="form-row">
				<div className="form-group mr-3">
					<label for="poruka">
						{lang == "sr"
							? sr.contactMail.contactMsg
							: en.contactMail.contactMsg}
					</label>
					<textarea className="form-control minContactForm" id="poruka" />
				</div>
			</div>
			<div className="form-row">
				<div className="form-group minRow mr-3">
					<div className="text-right">
						<button className="button" type="submit">
							{lang == "sr"
								? sr.contactMail.contactButton
								: en.contactMail.contactButton}
							<img src={send} className="icon" />
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default ContactMail;
