import React, { useContext } from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Footer from "./Footer";
import Trophies from "./Trophies";
import Contact from "./Contact";
import DoubleGallery from "./DoubleGallery";
import { store } from "./../context/Store";
import { sr, en } from "./../../dict";

const ONama = () => {
	const globalState = useContext(store);
	let { lang } = globalState.state;
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbo
				type="about"
				jumboText={lang == "sr" ? sr.oNama.jumboText : en.oNama.jumboText}
				image="jumboONama"
				desc={lang == "sr" ? sr.oNama.desc : en.oNama.desc}
			/>
			<Trophies />
			<Contact />
			<Footer color="white" />
		</div>
	);
};

export default ONama;
