import React from "react";
import left from "../../assets/svg/about/arrowLeft.svg";
import right from "../../assets/svg/about/arrowRight.svg";
import SingleGallery from "./SingleGallery";

const DoubleGallery = () => {
	return (
		<div className="container-flex">
			<div className="row hPerc80">
				<div className="col-xs-12 col-sm-6">
					<SingleGallery id="gallery1" active1="active" active2="" />
				</div>
				<div className="col-xs-12 col-sm-6">
					<SingleGallery id="gallery2" active1="" active2="active" />
				</div>
			</div>
			<div className="row">
				<div className="col-1 mr-3">
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
