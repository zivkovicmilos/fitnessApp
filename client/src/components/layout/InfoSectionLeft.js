import React from "react";
import InfoSectionContent from "./InfoSectionContent";

const InfoSectionLeft = (props) => {
	return (
		<div className="row centerRow">
			<div className="infoRow infoRowHigher">
				<div className="infoShadow">
					<div className="infoBackRight infoRowHigher infoShadow">
						<InfoSectionContent section={props.section} />
					</div>
				</div>
				<div className="infoShadow">
					<div
						className={`infoPicLeft ${props.section} infoShadow`}
					></div>
				</div>
			</div>
		</div>
	);
};

export default InfoSectionLeft;
