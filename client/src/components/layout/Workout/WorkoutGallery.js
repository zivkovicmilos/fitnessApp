import React, { Fragment } from "react";
import left from "../../../assets/svg/about/arrowLeft.svg";
import right from "../../../assets/svg/about/arrowRight.svg";
import SingleGallery from "./../SingleGallery";

const WorkoutGallery = (props) => {
	let { gallery } = props;
	return (
		<Fragment>
			<div id="workoutGallery" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li
						data-target="#workoutGallery"
						data-slide-to="0"
						className="active"
					></li>
					<li data-target="#workoutGallery" data-slide-to="1"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src={gallery ? gallery[0] : ""}
							alt="First slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src={gallery ? gallery[1] : ""}
							alt="Second slide"
						/>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#workoutGallery"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#workoutGallery"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</Fragment>
	);
};

export default WorkoutGallery;
