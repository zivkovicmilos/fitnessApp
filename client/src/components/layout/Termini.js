import React from "react";
import Sad from "../../assets/svg/sad.svg";
import TerminList from "./TerminList";

const Termini = () => {
	let brZak = 1;
	return (
		<div className="container-fluid erRowX termini">
			<div className="row">
				<div className="col-12 mb-4">
					<h1 className="pageTitle">Moji termini,</h1>
				</div>
			</div>
			<div className="row">{brZak && <TerminList />}</div>
			<div className="row">
				{!brZak && (
					<div className="col-12 sad mb-4">
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
