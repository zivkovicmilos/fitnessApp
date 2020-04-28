import React from "react";
import bottomPartGray from "../../assets/svg/bottomPartGray.svg";

const Footer = () => {
	return (
		<div className="row footer text-center">
			<img src={bottomPartGray} className="bottomPartGray" />
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
