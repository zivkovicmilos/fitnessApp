import React from "react";
import bottomPartGray from "../../assets/svg/bottomPartGray.svg";
import bottomPartWhite from "../../assets/svg/bottomPartWhite.svg";

const Footer = (props) => {
	let bottomPart;
	if (props.color == "gray") {
		bottomPart = <img src={bottomPartGray} className="bottomPartGray" />;
	} else {
		bottomPart = <img src={bottomPartWhite} className="bottomPartWhite" />;
	}
	return (
		<div className="row footer text-center">
			{bottomPart}
			<div className="col-md-4">
				Copyright &copy; {new Date().getFullYear()}
			</div>
			<div className="col-md-4">Martin Mitrović, Miloš Živković</div>
			<div className="col-md-4 text-center">
				Univerzitet u Beogradu,
				<br /> Elektrotehnički fakultet
			</div>
		</div>
	);
};

export default Footer;
