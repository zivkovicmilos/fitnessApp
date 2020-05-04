import React from "react";
import Sad from "../../assets/svg/sad.svg";

const Termini = () => {
	let brZak = 0;
	return (
		<div className="container-fluid centerRowX termini">
			<div className="row">
				<div className="col-12">
					<h1>Moji termini, </h1>
				</div>
			</div>
			<div className="row">
				{!brZak && (
					<div className="col-12 sad">
						<img src={Sad}></img>
					</div>
				)}
				{!brZak && (
					<div className="col-12 sad">
						<h2>Nemate zakazane termine</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default Termini;
