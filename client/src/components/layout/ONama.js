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
				desc="Ovo je stranica o nama"
			/>
			<Trophies />
			<Contact />
			<DoubleGallery />
			<Footer color="white" />
		</div>
	);
};

export default ONama;
