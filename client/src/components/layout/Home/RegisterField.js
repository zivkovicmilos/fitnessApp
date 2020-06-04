import React, { useState, useContext } from "react";
import RegisterForm from "./../../auth/RegisterForm";
import { store } from "./../../context/Store";
import { sr, en } from "./../../../dict";

const RegisterField = () => {
	const globalState = useContext(store);
	let { lang } = globalState.state;

	const [emailField, setEmailField] = useState("");

	return (
		<div className="col-md-5 offset-md-1 registerFieldWrapper">
			<div className="form-row centerRowY">
				<input
					type="text"
					className="form-control registerField"
					placeholder="E-mail"
					onChange={(e) => {
						setEmailField(e.target.value);
					}}
					id="emailRegField"
				/>
				<button
					type="button"
					className="modalButton"
					data-toggle="modal"
					data-target="#registrationModal"
					id="registerButton"
					onClick={() => {
						document.getElementById("emailRegField").value = "";
					}}
				>
					{lang == "sr"
						? sr.registerField.registerButton
						: en.registerField.registerButton}
				</button>

				<RegisterForm email={emailField} />
			</div>
		</div>
	);
};

export default RegisterField;
