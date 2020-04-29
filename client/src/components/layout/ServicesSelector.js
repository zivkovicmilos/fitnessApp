import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from "../context/Store";

const ServicesSelector = (props) => {
	const globalState = useContext(store);
	const { dispatch } = globalState;

	//dispatch({ type: 'action' });
	return (
		<div
			className="servicesSelector"
			onClick={(e) =>
				dispatch({ type: "changeSection", nextSection: e.target.id })
			}
		>
			<span className="ssActive" id="Treninzi">
				Treninzi
			</span>
			<span id="Nutricionista">Nutricionista</span>
			<span id="Masaze">Masaže</span>
		</div>
	);
};

export default ServicesSelector;
