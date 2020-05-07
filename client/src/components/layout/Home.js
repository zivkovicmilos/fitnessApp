import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ShowcaseItem from "./ShowcaseItem";
import Jumbo from "./Jumbo";
import Footer from "./Footer";
import homeImg from "../../assets/img/homePage.jpg";
import bottomPartWhite from "../../assets/svg/bottomPartWhite.svg";
import MembershipItem from "./MembershipItem";
import axios from "axios";

const Home = () => {
	const [perks, setPerks] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(`/api/perks`);
			setPerks(result.data);
		};

		fetchData();
	}, []);

	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbo
				type="home"
				jumboText="Počnite da trenirate sa najboljima."
				image="jumboHome"
			/>
			<div className="row text-center centerRow showcaseRow">
				<h3 className="col-md-12">
					<span className="sectionTitle">NAJBOLJI TRENINZI</span>
				</h3>

				<h2 className="col-md-12 sectionTitleBig">
					<span>Pogledajte najpopularnije treninge do sada</span>
				</h2>

				<div className="row centerRow">
					<ShowcaseItem />
					<ShowcaseItem />
					<ShowcaseItem />
				</div>
			</div>
			<div className="row membershipRow centerRow text-center">
				<img src={bottomPartWhite} className="bottomPartWhite" />
				<h3 className="col-lg-12" id="membershipTitleTop">
					<span className="sectionTitle">ČLANARINE</span>
				</h3>

				<div className="row centerRow">
					{perks.map((perk) => (
						<MembershipItem
							name={perk.name}
							price={perk.price}
							membershipItems={perk.items}
						/>
					))}
				</div>
				{/*
				
				<div className="row centerRow">
					<MembershipItem
						name={perks[0].name}
						price={perks[0].price}
						membershipItems={perks[0].items}
					/>
					<MembershipItem
						name={perks[1].name}
						price={perks[1].price}
						membershipItems={perks[1].items}
					/>
					<MembershipItem
						name={perks[2].name}
						price={perks[2].price}
						membershipItems={perks[2].items}
					/>
					
				</div>
				*/}
			</div>
			<Footer color="gray" />
		</div>
	);
};

export default Home;
