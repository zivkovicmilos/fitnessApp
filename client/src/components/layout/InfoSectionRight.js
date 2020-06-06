import React, { useEffect, useState } from "react";
import InfoSectionContent from "./InfoSectionContent";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const InfoSectionLeft = (props) => {
	const [sectionLoaded, setSectionLoaded] = useState(false);

	useEffect(() => {
		setSectionLoaded(true);
	}, []);
	return (
		<CSSTransition
			in={sectionLoaded}
			timeout={300}
			classNames="fade"
			unmountOnExit
			onExited={() => setSectionLoaded(false)}
		>
			<div className="row centerRow">
				<div className="infoContentWrapper col-lg-9 col-md-10 col-11">
					<div
						className={`infoPictureRight ${props.section} col-lg-4 col-md-12 hiddenNutrition`}
					></div>
					<div className="infoContent">
						<InfoSectionContent section={props.section} />
					</div>
					<div
						className={`infoPictureRight ${props.section} col-lg-4 col-md-12 showingNutrition`}
					></div>
				</div>
			</div>
		</CSSTransition>
	);
};

export default InfoSectionLeft;
