import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { store } from "../context/Store";

const ServicesSelector = (props) => {
	const globalState = useContext(store);
	const { dispatch } = globalState;

	//dispatch({ type: 'action' });
	return (
		<div className=" row">
			<div
				className="servicesSelector offset-md-1 mt-3"
				onClick={(e) =>
					dispatch({
						type: "changeSection",
						nextSection: e.target.id,
					})
				}
			>
				<Link to="treninzi" id="Treninzi" className="ssActive">
					Treninzi
				</Link>
				<Link to="nutricionista" id="Nutricionista">
					Nutricionista
				</Link>
				<Link to="masaze" id="Masaze">
					Masaže
				</Link>
			</div>
		</div>
	);
};

export default ServicesSelector;
