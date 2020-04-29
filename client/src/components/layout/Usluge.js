import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Jumbo from "./Jumbo";
import InfoSectionRight from "./InfoSectionRight";
import UslugeTreninzi from "./UslugeTreninzi";
import UslugeNutricionista from "./UslugeNutricionista";
import UslugeMasaze from "./UslugeMasaze";
import { store } from "../context/Store";

const Services = () => {
	const globalState = useContext(store);

	/*
	Using dispatch:
	const { dispatch } = globalState;

  dispatch({ type: 'action description' })
	*/

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
				desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Mauris id ligula consequat, eleifend neque convallis,
				bibendum tellus."
				jumboText="Naše usluge"
				image="jumboUsluge"
			/>

			{renderedSection}

			<Footer color="white" />
		</div>
	);
};

export default Services;
