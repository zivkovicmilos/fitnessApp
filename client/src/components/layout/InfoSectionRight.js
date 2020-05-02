import React from "react";
import InfoSectionContent from "./InfoSectionContent";

const InfoSectionLeft = (props) => {
	return (
		<div className="row centerRow">
			<div className="infoRow infoRowHigher">
				<div className="infoShadow">
					<div className="infoBackLeft infoRowHigher infoShadow">
						<InfoSectionContent />
					</div>
				</div>
				<div className="infoShadow">
					<div
						className={`infoPicRight ${props.section} infoShadow`}
					></div>
				</div>
			</div>
		</div>
	);
};

export default InfoSectionLeft;
