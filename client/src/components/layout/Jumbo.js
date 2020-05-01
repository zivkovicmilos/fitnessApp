import React, { useState, useEffect } from "react";
import ServicesSelector from "./ServicesSelector";
import RegisterField from "./Home/RegisterField";
import topPartWhite from "../../assets/svg/topPartWhite.svg";

const Jumbo = (props) => {
	let jumboDesc =
		props.type == "services" ||
		props.type == "reservation" ||
		props.type == "about"
			? props.desc
			: false;
	let serviceSelector = props.type == "services" ? true : false;
	let homeRegister = props.type == "home" ? true : false;
	return (
		<div className={`row jumboWrapper ${props.image}`}>
			<div className="container-fluid jumboContent">
				<div className="row">
					<h1 className="col-md-6 offset-md-1 jumboText">
						{props.jumboText}
					</h1>
				</div>
				<div className="row">
					{jumboDesc && (
						<div className="jumboDesc offset-md-1 col-md-5">
							{props.desc}
						</div>
					)}
				</div>
				{serviceSelector && <ServicesSelector />}

				<div className="row mt-3">
					{homeRegister && <RegisterField />}
				</div>
			</div>

			<img src={topPartWhite} className="topPartWhite" />
		</div>
	);
};

export default Jumbo;
