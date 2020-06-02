import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { store } from "../context/Store";

const ServicesSelector = (props) => {
	const globalState = useContext(store);
	const { dispatch } = globalState;

	let section = globalState.state.section;

	return (
		<div className=" row">
			<div
				className="servicesSelector offset-md-1 mt-3"
				onClick={(e) =>
					dispatch({
						type: "changeSection",
						nextSection: e.target.id
					})
				}
			>
				<Link
					to="treninzi"
					id="Treninzi"
					className={section == "Treninzi" ? "ssActive" : ""}
				>
					Treninzi
				</Link>
				<Link
					to="nutricionista"
					id="Nutricionista"
					className={section == "Nutricionista" ? "ssActive" : ""}
				>
					Nutricionista
				</Link>
				<Link
					to="masaze"
					id="Masaze"
					className={section == "Masaze" ? "ssActive" : ""}
				>
					Masaže
				</Link>
			</div>
		</div>
	);
};

export default ServicesSelector;
