import React from "react";
import TerminList from "./TerminList";

const Termini = () => {
	return (
		<div className="container-fluid erRowX termini">
			<div className="row">
				<div className="col-12 mb-4">
					<h1 className="pageTitle">Moji termini,</h1>
				</div>
			</div>
			<div className="row">
				<TerminList />
			</div>
		</div>
	);
};

export default Termini;
