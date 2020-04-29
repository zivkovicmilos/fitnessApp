import React, { Fragment } from "react";
import InfoSectionLeft from "./InfoSectionLeft";
import TrainingSection from "./TrainingSection";

const UslugeTreninzi = () => {
	return (
		<Fragment>
			<InfoSectionLeft section="infoTreninzi" />
			<TrainingSection type="yoga" />
			<TrainingSection type="pilates" />
			<TrainingSection type="core" />
			<TrainingSection type="cardio" />
		</Fragment>
	);
};

export default UslugeTreninzi;
