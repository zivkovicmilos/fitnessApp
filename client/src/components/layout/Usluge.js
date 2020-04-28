import React from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import InfoSectionLeft from "./InfoSectionLeft";
import TrainingSection from "./TrainingSection";

const Usluge = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbo jumboText="Naše usluge" image="jumboUsluge" />
			{
				//<InfoSectionLeft section="infoTreninzi" />
			}
			<TrainingSection type="yoga" />
		</div>
	);
};

export default Usluge;
