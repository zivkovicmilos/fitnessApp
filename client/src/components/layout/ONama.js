import React from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Footer from "./Footer";
import Trophies from "./Trophies";
import Contact from "./Contact";
import DoubleGallery from "./DoubleGallery";

const ONama = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbo
				type="about"
				jumboText="Naš tim"
				image="jumboONama"
				desc="Ovde možete naučiti nešto više o nama, našem timu i dostignućima."
			/>
			<Trophies />
			<Contact />
			<Footer color="white" />
		</div>
	);
};

export default ONama;
