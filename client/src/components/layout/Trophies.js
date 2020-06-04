import React, { useContext } from "react";
import Trophy from "./Trophy";
import fitPass from "../../assets/img/fitPass.png";
import nwcm from "../../assets/img/nwcm.jpg";
import goty from "../../assets/img/goty.png";
import mmbrCard from "../../assets/img/mmbrCard.jpg";
import nutrition from "../../assets/img/nutrition.jpg";
import charity from "../../assets/img/charity.png";

import { store } from "./../context/Store";
import { sr, en } from "./../../dict";

const Trophies = (props) => {
	const globalState = useContext(store);
	let { lang } = globalState.state;

	return (
		<div class="container-fluid aboutContainer">
			<h1 className="pageTitle">
				{lang == "sr" ? sr.trophies.trophiesTitle : en.trophies.trophiesTitle}
			</h1>
			<br />
			<div class="row centerRowX">
				<div class="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-center">
					<Trophy
						image={nwcm}
						title={
							lang == "sr"
								? sr.trophies.trophies[0].title
								: en.trophies.trophies[0].title
						}
						text={
							lang == "sr"
								? sr.trophies.trophies[0].text
								: en.trophies.trophies[0].text
						}
					/>
				</div>
				<div class="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-center">
					<Trophy
						image={goty}
						title={
							lang == "sr"
								? sr.trophies.trophies[1].title
								: en.trophies.trophies[1].title
						}
						text={
							lang == "sr"
								? sr.trophies.trophies[1].text
								: en.trophies.trophies[1].text
						}
					/>
				</div>
				<div class="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-center">
					<Trophy
						image={mmbrCard}
						title={
							lang == "sr"
								? sr.trophies.trophies[2].title
								: en.trophies.trophies[2].title
						}
						text={
							lang == "sr"
								? sr.trophies.trophies[2].text
								: en.trophies.trophies[2].text
						}
					/>
				</div>
				<div class="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-center">
					<Trophy
						image={fitPass}
						title={
							lang == "sr"
								? sr.trophies.trophies[3].title
								: en.trophies.trophies[3].title
						}
						text={
							lang == "sr"
								? sr.trophies.trophies[3].text
								: en.trophies.trophies[3].text
						}
					/>
				</div>
				<div class="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-center">
					<Trophy
						image={nutrition}
						title={
							lang == "sr"
								? sr.trophies.trophies[4].title
								: en.trophies.trophies[4].title
						}
						text={
							lang == "sr"
								? sr.trophies.trophies[4].text
								: en.trophies.trophies[4].text
						}
					/>
				</div>

				<div class="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-center">
					<Trophy
						image={charity}
						title={
							lang == "sr"
								? sr.trophies.trophies[5].title
								: en.trophies.trophies[5].title
						}
						text={
							lang == "sr"
								? sr.trophies.trophies[5].text
								: en.trophies.trophies[5].text
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Trophies;
