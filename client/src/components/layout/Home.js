import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import ShowcaseItem from "./ShowcaseItem";
import Jumbo from "./Jumbo";
import Footer from "./Footer";
import bottomPartWhite from "../../assets/svg/bottomPartWhite.svg";
import MembershipItem from "./MembershipItem";
import axios from "axios";
import { store } from "./../context/Store";
import { sr, en } from "./../../dict";

const Home = () => {
	const globalState = useContext(store);

	let { lang } = globalState.state;

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
				jumboText={lang == "sr" ? sr.home.jumboText : en.home.jumboText}
				image="jumboHome"
			/>
			<div className="row text-center centerRow showcaseRow">
				<h3 className="col-md-12">
					<span className="sectionTitle">
						{lang == "sr" ? sr.home.trainingText : en.home.trainingText}
					</span>
				</h3>

				<h2 className="col-md-12 sectionTitleBig">
					<span>
						{lang == "sr" ? sr.home.trainingDesc : en.home.trainingDesc}
					</span>
				</h2>

				<div className="row centerRow">
					{topWorkouts.map((topWorkout, index) => (
						<ShowcaseItem
							key={`showcase${index}`}
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
					<span className="sectionTitle">
						{lang == "sr" ? sr.home.subscription : en.home.subscription}
					</span>
				</h3>

				<div className="row centerRow">
					{perks.map((perk) => (
						<MembershipItem
							key={perk._id}
							name={lang == "sr" ? perk.name : perk.nameEN}
							price={perk.price}
							membershipItems={lang == "sr" ? perk.items : perk.itemsEN}
						/>
					))}
				</div>
			</div>
			<Footer color="gray" />
		</div>
	);
};

export default Home;
