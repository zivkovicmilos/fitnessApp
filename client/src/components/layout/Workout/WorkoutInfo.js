import React, { Fragment, useContext } from "react";
import clock from "./../../../assets/svg/clockBlack.svg";
import levelIcon from "./../../../assets/svg/level.svg";
import { store } from "./../../context/Store";

const WorkoutInfo = (props) => {
	const globalState = useContext(store);
	let { lang } = globalState.state;

	const { level, duration } = props;
	return (
		<Fragment>
			<div className="mr-5">
				<img src={clock} className="workoutIcon mr-2" />
				<span className="workoutDuration">{duration * 30} min.</span>
			</div>
			<div>
				<img src={levelIcon} className="workoutIcon mr-2" />
				<span className="workoutLevel">
					{`${lang == "sr" ? "Nivo" : "Level"} ${level}`}{" "}
				</span>
			</div>
		</Fragment>
	);
};

export default WorkoutInfo;
