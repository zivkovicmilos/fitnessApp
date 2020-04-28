import React from "react";
import yogaBanner from "../../assets/svg/typeBanners/yoga.svg";
import SectionList from "./SectionList";

const TrainingSection = (props) => {
	switch (props.type) {
		case "yoga": {
			return (
				<div>
					<div className="row centerRow">
						<img
							src={yogaBanner}
							className="typeBanner col-xs-12"
						/>
					</div>
					<SectionList type="yoga" />
				</div>
			);
			break;
		}
		case "pilates": {
			break;
		}
		case "core": {
			break;
		}
		case "cardio": {
			break;
		}
	}
};

export default TrainingSection;
