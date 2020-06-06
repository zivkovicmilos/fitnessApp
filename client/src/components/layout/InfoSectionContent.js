import React, { Fragment, useState, useContext, useEffect } from "react";
import ServicesForm from "./ServicesForm";
import dumbell from "./../../assets/svg/services/dumbell.svg";
import clockOrange from "./../../assets/svg/services/clockOrange.svg";
import nutritionist from "./../../assets/svg/services/nutritionist.svg";
import massage from "./../../assets/svg/services/massage.svg";
import { store } from "./../context/Store";
import { sr, en } from "./../../dict";

const InfoSectionContent = (props) => {
	const globalState = useContext(store);
	let { lang } = globalState.state;

	if (props.section == "infoTreninzi") {
		return (
			<Fragment>
				<div className="row centerRow">
					<h2 className="col-md-10 col-10">
						<div className="container centerY">
							<img src={dumbell} className="servicesIcon" />
							<span className="ml-2">
								{lang == "sr"
									? sr.infoSectionContent.trainingTitle1
									: en.infoSectionContent.trainingTitle1}
							</span>
						</div>
					</h2>
					<span className="sectionText col-md-10 col-10">
						{lang == "sr"
							? sr.infoSectionContent.trainingText1
							: en.infoSectionContent.trainingText1}
					</span>
				</div>
				<div className="row centerRow mt-5">
					<h2 className="col-md-10 col-10">
						<div className="container centerY text-right">
							<img src={clockOrange} className="servicesIcon iconSmaller" />
							<span className="ml-2">
								{lang == "sr"
									? sr.infoSectionContent.trainingTitle2
									: en.infoSectionContent.trainingTitle2}
							</span>
						</div>
					</h2>
					<span className="sectionText col-md-10 col-10">
						{lang == "sr"
							? sr.infoSectionContent.trainingText2
							: en.infoSectionContent.trainingText2}
					</span>
				</div>
			</Fragment>
		);
	} else if (props.section == "infoNutricionista") {
		return (
			<Fragment>
				<div className="centerRow pr-4 pl-4">
					<div className="centerY">
						<h2>
							<img src={nutritionist} className="servicesIcon" />
							<span className="ml-2">
								{lang == "sr"
									? sr.infoSectionContent.nutritionTitle
									: en.infoSectionContent.nutritionTitle}
							</span>
						</h2>
					</div>

					<div className="text-justify">
						<span className="sectionText">
							{lang == "sr"
								? sr.infoSectionContent.nutritionText
								: en.infoSectionContent.nutritionText}
						</span>
					</div>
				</div>
				<div className="d-flex centerRow">
					<ServicesForm section={props.section} />
				</div>
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<div className="centerRow pr-4 pl-4">
					<div className="centerY">
						<h2>
							<img src={massage} className="servicesIcon" />
							<span className="ml-2">
								{lang == "sr"
									? sr.infoSectionContent.massageTitle
									: en.infoSectionContent.massageTitle}
							</span>
						</h2>
					</div>

					<div className="text-justify">
						<span className="sectionText">
							{lang == "sr"
								? sr.infoSectionContent.massageText
								: en.infoSectionContent.massageText}
						</span>
					</div>
				</div>
				<div className="d-flex centerRow">
					<ServicesForm section={props.section} />
				</div>
			</Fragment>
		);
	}
};

export default InfoSectionContent;
