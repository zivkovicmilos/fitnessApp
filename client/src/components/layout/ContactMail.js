import React from "react";
import send from "../../assets/svg/send.svg";

const ContactMail = () => {
	return (
		<React.Fragment>
			<form onSubmit="" id="mailForm">
				<div class="row">
					<div class="col">
						<label>
							Ime i prezime:
							<br />
							<input type="text" id="imePrezime" />
						</label>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<label>
							E-mail:
							<br />
							<input type="text" id="eMail" />
						</label>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<label>
							Poruka:
							<br />
							<input type="textarea" id="poruka" />
						</label>
					</div>
				</div>
				<div class="row">
					<div class="offset-sm-8 col">
						<button className="button" type="submit">
							Pošalji
							<img src={send} className="icon" />
						</button>
					</div>
				</div>
			</form>
		</React.Fragment>
	);
};

export default ContactMail;
