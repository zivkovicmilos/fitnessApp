import React from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import SettingsField from "./SettingsFields";
import Footer from "./Footer";

const Settings = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbo type="settings" image="jumboPodesavanja" />
			<SettingsField />
			<Footer />
		</div>
	);
};

export default Settings;
