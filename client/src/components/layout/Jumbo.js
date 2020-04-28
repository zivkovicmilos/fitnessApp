import React from "react";
import topPartWhite from "../../assets/svg/topPartWhite.svg";

const Jumbo = (props) => {
	return (
		<div className={`row jumboWrapper ${props.image}`}>
			<div className="jumboText">
				<h1>{props.jumboText}</h1>
			</div>
			<img src={topPartWhite} className="topPartWhite" />
		</div>
	);
};

export default Jumbo;
