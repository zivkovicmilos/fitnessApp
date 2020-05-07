import React, { Fragment } from "react";
import clock from "./../../../assets/svg/clockBlack.svg";
import level from "./../../../assets/svg/level.svg";

const WorkoutInfo = () => {
	return (
		<Fragment>
			<div className="mr-5">
				<img src={clock} className="workoutIcon mr-2" />
				<span className="workoutDuration">45 min.</span>
			</div>
			<div>
				<img src={level} className="workoutIcon mr-2" />
				<span className="workoutLevel">Nivo 1</span>
			</div>
		</Fragment>
	);
};

export default WorkoutInfo;
