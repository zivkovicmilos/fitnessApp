import React from "react";
import send from "../../assets/svg/send.svg";

const ServicesForm = () => {
	return (
		<form className="servicesForm">
			<div className="form-row">
				<div className="form-group mr-3">
					<label for="firstName">Ime</label>
					<input
						type="text"
						className="form-control"
						id="firstName"
					/>
				</div>
				<div className="form-group">
					<label for="lastName">Prezime</label>
					<input type="text" className="form-control" id="lastName" />
				</div>
			</div>
			<div className="form-row">
				<div className="form-group mr-3">
					<label for="phone">Telefon</label>
					<input type="text" className="form-control" id="phone" />
				</div>
				<div className="form-group">
					<label for="date">Datum</label>
					<input type="date" className="form-control" id="date" />
				</div>
			</div>
			<div className="form-group">
				<label for="description">Opis problema</label>
				<textarea className="form-control" id="description" />
			</div>
			<div className="text-right">
				<button className="button" type="submit">
					Pošalji
					<img src={send} className="icon" />
				</button>
			</div>
		</form>
	);
};

export default ServicesForm;
