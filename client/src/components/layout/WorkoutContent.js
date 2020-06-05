import React, { useContext } from "react";
import Stars from "./Workout/Stars";
import WorkoutInfo from "./Workout/WorkoutInfo";
import WorkoutGallery from "./Workout/WorkoutGallery";
import ReviewButton from "./Workout/ReviewButton";
import Comments from "./Workout/Comments";
import DoubleGallery from "./DoubleGallery";
import { store } from "./../context/Store";
import { sr, en } from "./../../dict";

const WorkoutContent = (props) => {
	const globalState = useContext(store);
	let { lang } = globalState.state;

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
					{lang == "sr" ? workoutData.descriptionSR : workoutData.descriptionEN}
					<h1
						className="workoutInfoTitle col mb-4 mt-5
				"
					>
						{lang == "sr"
							? sr.workoutContent.comments
							: en.workoutContent.comments}
					</h1>
					<div className="col-md-12">
						<Comments reviews={workoutData.reviews} />
					</div>
				</div>
				<div className="col-lg-4">
					<div className="row centerRow workoutInfoTitle mb-3">
						{lang == "sr" ? sr.workoutContent.info : en.workoutContent.info}
					</div>
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
						<WorkoutGallery gallery={workoutData.gallery} />
						<iframe
							width="240"
							height="180"
							src={workoutData.gallery ? workoutData.gallery[2] : ""}
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="mt-2"
						></iframe>
					</div>
					<div className="row centerRow workoutReviewButton">
						<ReviewButton reviews={workoutData.reviews} />
					</div>
				</div>
			</div>
			<div className="row centerRow mt-5"></div>
			<div className="row centerRowY"></div>
		</div>
	);
};

export default WorkoutContent;
