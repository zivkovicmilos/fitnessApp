import React from "react";

const FormError = ({ touched, message }) => {
	if (!touched) {
		return <div>&nbsp;</div>;
	}
	if (message) {
		return <div className="invalid-feedback">{message}</div>;
	}
	return <div></div>; // All good
};

export default FormError;
