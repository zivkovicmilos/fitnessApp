import React, { Fragment } from "react";
import starFull from "./../../../assets/svg/starFull.svg";
import starEmpty from "./../../../assets/svg/starEmpty.svg";

const Stars = (props) => {
	return (
		<Fragment>
			<img src={starFull} className="workoutStar" />
			<img src={starFull} className="workoutStar" />
			<img src={starFull} className="workoutStar" />
			<img src={starFull} className="workoutStar" />
			<img src={starEmpty} className="workoutStar" />
			<span className="starRating">(356)</span>
		</Fragment>
	);
};

export default Stars;
