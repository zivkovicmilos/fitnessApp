import React from "react";

const InfoSectionLeft = (props) => {
	return (
		<div className="row centerRow">
			<div className="infoRow">
				<div className="infoShadow">
					<div className="infoBackRight infoShadow">Hello :)</div>
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
