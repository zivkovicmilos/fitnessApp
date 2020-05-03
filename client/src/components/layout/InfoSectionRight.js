import React from "react";
import InfoSectionContent from "./InfoSectionContent";

const InfoSectionLeft = (props) => {
	return (
		<div className="row centerRow">
			<div className="infoContentWrapper col-lg-9 col-md-10 col-10">
				<div
					className={`infoPictureRight ${props.section} col-lg-4 col-md-12 hiddenNutrition`}
				></div>
				<div className="infoContent col">
					<InfoSectionContent section={props.section} />
				</div>
				<div
					className={`infoPictureRight ${props.section} col-lg-4 col-md-12 showingNutrition`}
				></div>
			</div>
		</div>
	);
};

export default InfoSectionLeft;
