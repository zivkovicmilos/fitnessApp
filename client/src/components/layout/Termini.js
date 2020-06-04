import React, { useContext } from "react";
import TerminList from "./TerminList";
import { store } from "./../context/Store";
import { sr, en } from "./../../dict";

const Termini = () => {
	const globalState = useContext(store);
	let { lang } = globalState.state;

	return (
		<div className="container-fluid erRowX termini">
			<div className="row">
				<div className="col-12 mb-4">
					<h1 className="pageTitle">
						{lang == "sr" ? sr.termini.pageTitle : en.termini.pageTitle}
					</h1>
				</div>
			</div>
			<div className="row">
				<TerminList />
			</div>
		</div>
	);
};

export default Termini;
