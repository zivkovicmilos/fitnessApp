import React from "react";
import msg1 from "../../assets/img/slikeONama/msg1.jpeg";
import nutri1 from "../../assets/img/slikeONama/nutri1.jpg";
import nutri2 from "../../assets/img/slikeONama/nutri2.png";
import training1 from "../../assets/img/slikeONama/training1.jpeg";
import training2 from "../../assets/img/slikeONama/training2.jpg";
import training3 from "../../assets/img/slikeONama/training3.jpg";
import training4 from "../../assets/img/slikeONama/training4.jpg";
import training5 from "../../assets/img/slikeONama/training5.jpg";
import training6 from "../../assets/img/slikeONama/training6.jpg";
import left from "../../assets/svg/about/arrowLeft.svg";
import right from "../../assets/svg/about/arrowRight.svg";

const SingleGallery = (props) => {
	return (
		<div id={props.id} class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
				<div className={`carousel-item ${props.active1}`}>
					<img
						src={msg1}
						className="d-block w-100 galleryImg"
						alt="..."
					/>
				</div>
				<div className={`carousel-item ${props.active2}`}>
					<img
						src={nutri1}
						className="d-block w-100 galleryImg"
						alt="..."
					/>
				</div>
				<div class="carousel-item">
					<img
						src={training1}
						className="d-block w-100 galleryImg"
						alt="..."
					/>
				</div>
				<div class="carousel-item">
					<img
						src={nutri2}
						className="d-block w-100 galleryImg"
						alt="..."
					/>
				</div>
				<div class="carousel-item">
					<img
						src={training2}
						className="d-block w-100 galleryImg"
						alt="..."
					/>
				</div>
				<div class="carousel-item">
					<img
						src={training3}
						className="d-block w-100 galleryImg"
						alt="..."
					/>
				</div>
				<div class="carousel-item">
					<img
						src={training4}
						className="d-block w-100 galleryImg"
						alt="..."
					/>
				</div>
				<div class="carousel-item">
					<img
						src={training5}
						className="d-block w-100 galleryImg"
						alt="..."
					/>
				</div>
				<div class="carousel-item">
					<img
						src={training6}
						className="d-block w-100 galleryImg"
						alt="..."
					/>
				</div>
			</div>
		</div>
	);
};

export default SingleGallery;
