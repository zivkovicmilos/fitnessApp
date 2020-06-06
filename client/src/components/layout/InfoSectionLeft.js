import React, { useEffect, useState } from "react";
import InfoSectionContent from "./InfoSectionContent";
import treninzi from "./../../assets/img/infoPics/treninzi.jpg";
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
						className={`infoPictureLeft ${props.section} col-lg-4 col-md-12`}
					></div>

					<div className="infoContent col">
						<InfoSectionContent section={props.section} />
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export default InfoSectionLeft;
