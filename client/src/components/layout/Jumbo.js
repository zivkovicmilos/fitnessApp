import React, { useState, useEffect } from "react";
import ServicesSelector from "./ServicesSelector";
import topPartWhite from "../../assets/svg/topPartWhite.svg";

const Jumbo = (props) => {
	let jumboDesc = props.type == "services" ? props.desc : false;
	let serviceSelector = props.type == "services" ? true : false;
	return (
		<div className={`row jumboWrapper ${props.image}`}>
			<div className="jumboText">
				<h1>{props.jumboText}</h1>
				{jumboDesc && <div className="jumboDesc">{props.desc}</div>}
				{serviceSelector && <ServicesSelector />}
			</div>

			<img src={topPartWhite} className="topPartWhite" />
		</div>
	);
};

export default Jumbo;
