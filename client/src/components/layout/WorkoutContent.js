import React from "react";
import Stars from "./Workout/Stars";
import WorkoutInfo from "./Workout/WorkoutInfo";
import WorkoutGallery from "./Workout/WorkoutGallery";
import ReviewButton from "./Workout/ReviewButton";
import Comments from "./Workout/Comments";

const WorkoutContent = (props) => {
	const { workoutData } = props;

	return (
		<div className="centerRow">
			<div className="row centerRow">
				<h1
					className="pageTitle col-md-12 offset-md-1 offset-1 col 
				"
				>
					{workoutData.name}
				</h1>
			</div>
			<div className="row">
				<div className="col-lg-7 ml-4 workoutDesc">
					{workoutData.descriptionSR}
					<h1
						className="workoutInfoTitle col mb-4 mt-5
				"
					>
						KOMENTARI
					</h1>
					<div className="col-md-12">
						<Comments />
					</div>
				</div>
				<div className="col-lg-4">
					<div className="row centerRow workoutInfoTitle mb-3">INFORMACIJE</div>
					<div className="row centerRowX mb-3">
						<Stars />
					</div>
					<div className="row centerRow workoutInfo mb-3">
						<WorkoutInfo />
					</div>
					<div className="row centerRow gallery mb-3">
						{
							// <WorkoutGallery />
						}
						Gallery here
					</div>
					<div className="row centerRow workoutReviewButton">
						<ReviewButton />
					</div>
				</div>
			</div>
			<div className="row centerRow mt-5"></div>
			<div className="row centerRowY"></div>
		</div>
	);
};

export default WorkoutContent;
