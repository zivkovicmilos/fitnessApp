import React from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Termini from "./Termini";

const Settings = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbo type="settings" image="jumboPodesavanja" />
		</div>
	);
};

export default Settings;
