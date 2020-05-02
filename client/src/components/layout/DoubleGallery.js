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
import SingleGallery from "./SingleGallery";

const DoubleGallery = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-6">
					<SingleGallery id="gallery1" active1="active" active2="" />
				</div>
				<div className="col-xs-12 col-sm-6">
					<SingleGallery id="gallery2" active1="" active2="active" />
				</div>
			</div>
			<div className="row">
				<div className="col-1">
					<a href="#gallery1" role="button" data-slide="prev">
						<a href="#gallery2" role="button" data-slide="prev">
							<div className="arrows d-flex justify-content-center">
								<img src={left} />
							</div>
						</a>
					</a>
				</div>
				<div className="col-1">
					<a href="#gallery1" role="button" data-slide="next">
						<a href="#gallery2" role="button" data-slide="next">
							<div className="arrows d-flex justify-content-center">
								<img src={right} />
							</div>
						</a>
					</a>
				</div>
			</div>
		</div>
	);
};

export default DoubleGallery;
