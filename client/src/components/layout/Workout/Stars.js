import React, { Fragment } from "react";
import starFull from "./../../../assets/svg/starFull.svg";
import starEmpty from "./../../../assets/svg/starEmpty.svg";

const Stars = (props) => {
	const { score } = props;

	let stars = [];
	for (let i = 0; i < Math.round(score); i++) {
		// Add the full stars
		stars.push(<img src={starFull} className="workoutStar" />);
	}

	if (Math.round(score) < 5) {
		// Add the empty stars
		let newNum = 5 - Math.round(score);
		for (let i = 0; i < newNum; i++) {
			stars.push(
				<img src={starEmpty} key={`star${i}`} className="workoutStar" />
			);
		}
	}
	return (
		<Fragment>
			{stars}
			<span className="starRating ml-2">{score} / 5</span>
		</Fragment>
	);
};

export default Stars;
