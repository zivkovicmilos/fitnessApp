import React from "react";
import Navbar from "./Navbar";
import ShowcaseItem from "./ShowcaseItem";
import homeImg from "../../assets/img/homePage.jpg";

const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="row jumboWrapper jumboHome">
				<div className="jumboText">
					<h1>Počnite da trenirate sa najboljima.</h1>
				</div>
			</div>
			<div className="row text-center">
				<h3 className="sectionTitle col-lg-12">NAJBOLJI TRENINZI</h3>
				<h2 className="sectionTitleBig col-lg-12">
					Pogledajte najpopularnije treninge do sada
				</h2>
			</div>
			<div className="row showcaseRow">
				<ShowcaseItem />
				<ShowcaseItem />
				<ShowcaseItem />
			</div>
		</div>
	);
};

export default Home;
