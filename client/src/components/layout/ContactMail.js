import React from "react";
import send from "../../assets/svg/send.svg";

const ContactMail = () => {
	return (
		<form className="contactForm">
			<div className="form-row">
				<div className="form-group mr-3">
					<label for="imePrezime">Ime i prezime</label>
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
					<label for="poruka">Opis problema</label>
					<textarea
						className="form-control minContactForm"
						id="poruka"
					/>
				</div>
			</div>
			<div className="form-row">
				<div className="form-group minRow mr-3">
					<div className="text-right">
						<button className="button" type="submit">
							Pošalji
							<img src={send} className="icon" />
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default ContactMail;
