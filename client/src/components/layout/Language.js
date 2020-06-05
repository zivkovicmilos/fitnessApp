import React, { useState, useContext } from "react";
import { store } from "../context/Store";

const Language = () => {
	const globalState = useContext(store);

	let { lang } = globalState.state;
	const { dispatch } = globalState;

	return (
		<div className="languages">
			<span
				id="en"
				className={`${lang == "en" ? "languageActive" : ""}`}
				onClick={(e) => {
					dispatch({
						type: "CHANGE_LANGUAGE",
						payload: e.target.id
					});
				}}
			>
				EN
			</span>
			<span className="langSeparator">|</span>
			<span
				id="sr"
				className={`${lang == "sr" ? "languageActive" : ""}`}
				onClick={(e) => {
					dispatch({
						type: "CHANGE_LANGUAGE",
						payload: e.target.id
					});
				}}
			>
				SR
			</span>
		</div>
	);
};

export default Language;
