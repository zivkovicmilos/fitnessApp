import React from "react";
import Stars from "./Workout/Stars";
import WorkoutInfo from "./Workout/WorkoutInfo";
import WorkoutGallery from "./Workout/WorkoutGallery";
import ReviewButton from "./Workout/ReviewButton";
import Comments from "./Workout/Comments";
import DoubleGallery from "./DoubleGallery";

const WorkoutContent = (props) => {
	const { workoutData } = props;

	return (
		<div className="centerRow">
			<div className="row centerRow">
				<h1
					className="pageTitle offset-md-1 offset-1 col 
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
						<Comments reviews={workoutData.reviews} />
					</div>
				</div>
				<div className="col-lg-4">
					<div className="row centerRow workoutInfoTitle mb-3">INFORMACIJE</div>
					<div className="row centerRow mb-3">
						<Stars score={workoutData.averageGrade} />
					</div>
					<div className="row centerRow workoutInfo mb-3">
						<WorkoutInfo
							level={workoutData.level}
							duration={workoutData.duration}
						/>
					</div>
					<div className="centerRow workoutGallery w-50 gallery mb-3">
						<WorkoutGallery />
						<video autoPlay loop controls="controls" width="200" height="150">
							<source
								src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
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
