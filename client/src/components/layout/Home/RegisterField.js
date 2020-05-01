import React from "react";

const RegisterField = () => {
	return (
		<form className="col-md-5 offset-md-1 registerFieldWrapper">
			<div className="form-row centerRowY">
				<input
					type="text"
					className="form-control registerField"
					placeholder="E-mail"
				/>
				<button type="button" className="modalButton">
					Pridruži se
				</button>
			</div>
		</form>
	);
};

export default RegisterField;
