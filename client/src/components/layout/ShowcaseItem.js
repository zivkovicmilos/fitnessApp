import React, { useContext } from "react";
import starFull from "../../assets/svg/starFull.svg";
import starEmpty from "../../assets/svg/starEmpty.svg";
import { store } from "./../context/Store";

const ShowcaseItem = (props) => {
	const globalState = useContext(store);
	let { lang } = globalState.state;

	let { name, picture, descriptionSR, descriptionEN, averageGrade } = props;

	let stars = [];
	for (let i = 0; i < Math.round(averageGrade); i++) {
		// Add the full stars
		stars.push(
			<img src={starFull} key={`starFull${i}`} className="workoutStar" />
		);
	}

	if (Math.round(averageGrade) < 5) {
		// Add the empty stars
		let newNum = 5 - Math.round(averageGrade);
		for (let i = 0; i < newNum; i++) {
			stars.push(
				<img src={starEmpty} key={`starEmpty${i}`} className="workoutStar" />
			);
		}
	}

	return (
		<div className="col-lg-4 col-md-6 homeItems">
			<div className="showcaseBox">
				<div className={`showcaseImg ${picture}`}></div>
				<div className="showcaseBoxLower">
					<h1 className="showcaseTitle">{name}</h1>
					<div className="rating centerRowY">
						<div className="stars">{stars}</div>
						<h2 className="showcaseNum mb-0">{averageGrade}</h2>
					</div>
					<p className="showcaseDesc">
						{`${(lang == "sr" ? descriptionSR : descriptionEN).replace(
							/^(.{160}[^\s]*).*/,
							"$1"
						)}...`}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ShowcaseItem;
