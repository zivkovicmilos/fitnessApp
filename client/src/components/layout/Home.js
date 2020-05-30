import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ShowcaseItem from "./ShowcaseItem";
import Jumbo from "./Jumbo";
import Footer from "./Footer";
import bottomPartWhite from "../../assets/svg/bottomPartWhite.svg";
import MembershipItem from "./MembershipItem";
import axios from "axios";

const Home = () => {
	const [perks, setPerks] = useState([]);

	const [topWorkouts, setTopWorkouts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			let result = await axios.get(`/api/perks`);
			setPerks(result.data);

			result = await axios.get("/api/workouts/top");
			setTopWorkouts(result.data);
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
					{topWorkouts.map((topWorkout) => (
						<ShowcaseItem
							name={topWorkout.name}
							picture={topWorkout.picture}
							descriptionSR={topWorkout.descriptionSR}
							descriptionEN={topWorkout.descriptionEN}
							averageGrade={topWorkout.averageGrade}
						/>
					))}
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
							key={perk._id}
							name={perk.name}
							price={perk.price}
							membershipItems={perk.items}
						/>
					))}
				</div>
			</div>
			<Footer color="gray" />
		</div>
	);
};

export default Home;
