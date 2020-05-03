import React, { Fragment } from "react";
import yogaBanner from "../../assets/svg/typeBanners/yoga.svg";
import pilatesBanner from "../../assets/svg/typeBanners/pilates.svg";
import coreBanner from "../../assets/svg/typeBanners/core.svg";
import cardioBanner from "../../assets/svg/typeBanners/cardio.svg";
import SectionList from "./SectionList";

const TrainingSection = (props) => {
	switch (props.type) {
		case "yoga": {
			return (
				<Fragment>
					<div className="row centerRow">
						<img
							src={yogaBanner}
							className="typeBanner col-8 col-md-5 col-lg-4"
						/>
					</div>
					<SectionList type="yoga" />
				</Fragment>
			);
		}
		case "pilates": {
			return (
				<Fragment>
					<div className="row centerRow">
						<img
							src={pilatesBanner}
							className="typeBanner col-8 col-md-5 col-lg-4"
						/>
					</div>
					<SectionList type="pilates" />
				</Fragment>
			);
		}
		case "core": {
			return (
				<Fragment>
					<div className="row centerRow">
						<img
							src={coreBanner}
							className="typeBanner col-8 col-md-5 col-lg-4"
						/>
					</div>
					<SectionList type="core" />
				</Fragment>
			);
		}
		case "cardio": {
			return (
				<Fragment>
					<div className="row centerRow">
						<img
							src={cardioBanner}
							className="typeBanner col-8 col-md-5 col-lg-4"
						/>
					</div>
					<SectionList type="cardio" />
				</Fragment>
			);
		}
	}
};

export default TrainingSection;
