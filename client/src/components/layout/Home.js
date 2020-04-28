import React from "react";
import Navbar from "./Navbar";
import ShowcaseItem from "./ShowcaseItem";
import Jumbo from "./Jumbo";
import Footer from "./Footer";
import homeImg from "../../assets/img/homePage.jpg";
import bottomPartWhite from "../../assets/svg/bottomPartWhite.svg";
import MembershipItem from "./MembershipItem";

const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbo
				jumboText="Počnite da trenirate sa najboljima."
				image="jumboHome"
			/>
			<div className="row text-center centerRow showcaseRow">
				<h3 className="col-lg-12">
					<span className="sectionTitle">NAJBOLJI TRENINZI</span>
				</h3>
				<h2 className="col-lg-12 sectionTitleBig">
					<span>Pogledajte najpopularnije treninge do sada</span>
				</h2>
				<ShowcaseItem />
				<ShowcaseItem />
				<ShowcaseItem />
			</div>
			<div className="row membershipRow centerRow text-center">
				<img src={bottomPartWhite} className="bottomPartWhite" />
				<h3 className="col-lg-12" id="membershipTitleTop">
					<span className="sectionTitle">ČLANARINE</span>
				</h3>
				<MembershipItem
					name="JEDAN"
					price="2.500rsd"
					membershipItems={[
						"Pogodnost 1",
						"Pogodnost 2",
						"Pogodnost 3",
						"Pogodnost 4",
					]}
				/>
				<MembershipItem
					name="DVA"
					price="2.500rsd"
					membershipItems={[
						"Pogodnost 1",
						"Pogodnost 2",
						"Pogodnost 3",
						"Pogodnost 4",
					]}
				/>
				<MembershipItem
					name="TRI"
					price="2.500rsd"
					membershipItems={[
						"Pogodnost 1",
						"Pogodnost 2",
						"Pogodnost 3",
						"Pogodnost 4",
					]}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
