import React from "react";
import InfoSectionContent from "./InfoSectionContent";
import treninzi from "./../../assets/img/infoPics/treninzi.jpg";

const InfoSectionLeft = (props) => {
	return (
		<div className="row centerRow">
			<div className="infoContentWrapper col-lg-9 col-md-10 col-10">
				<div
					className={`infoPictureLeft ${props.section} col-lg-4 col-md-12`}
				></div>

				<div className="infoContent col">
					<InfoSectionContent section={props.section} />
				</div>
			</div>
		</div>
	);
};

export default InfoSectionLeft;
