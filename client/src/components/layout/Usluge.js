import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Jumbo from "./Jumbo";
import InfoSectionRight from "./InfoSectionRight";
import UslugeTreninzi from "./UslugeTreninzi";
import UslugeNutricionista from "./UslugeNutricionista";
import UslugeMasaze from "./UslugeMasaze";
import { store } from "../context/Store";
import { sr, en } from "../../dict";

const Services = () => {
	const globalState = useContext(store);

	let { lang } = globalState.state;

	let renderedSection = <UslugeTreninzi />;
	switch (globalState.state.section) {
		case "Treninzi":
			renderedSection = <UslugeTreninzi />;
			break;
		case "Nutricionista":
			renderedSection = <UslugeNutricionista />;
			break;
		case "Masaze":
			renderedSection = <UslugeMasaze />;
			break;
	}

	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbo
				type="services"
				desc={lang == "sr" ? sr.services.desc : en.services.desc}
				jumboText={lang == "sr" ? sr.services.jumboText : en.services.jumboText}
				image="jumboUsluge"
			/>

			{renderedSection}

			<Footer color="white" />
		</div>
	);
};

export default Services;
