import React, { useState } from "react";
import RegisterForm from "./../../auth/RegisterForm";

const RegisterField = () => {
	const [emailField, setEmailField] = useState("");

	return (
		<form className="col-md-5 offset-md-1 registerFieldWrapper">
			<div className="form-row centerRowY">
				<input
					type="text"
					className="form-control registerField"
					placeholder="E-mail"
					onChange={(e) => {
						console.log("Logging " + e.target.value);
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
					Pridruži se
				</button>

				<RegisterForm email={emailField} />
			</div>
		</form>
	);
};

export default RegisterField;
