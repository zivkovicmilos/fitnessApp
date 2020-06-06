import React, { useState, useEffect } from "react";
import ServicesSelector from "./ServicesSelector";
import RegisterField from "./Home/RegisterField";
import topPartWhite from "../../assets/svg/topPartWhite.svg";
import DoubleGallery from "./DoubleGallery";

const Jumbo = (props) => {
	let jumboDesc =
		props.type == "services" ||
		props.type == "reservation" ||
		props.type == "about"
			? props.desc
			: false;
	let serviceSelector = props.type == "services" ? true : false;
	let homeRegister = props.type == "home" ? true : false;
	let aboutRegister = props.type == "about" ? true : false;
	let jumboImageClass =
		props.type == "profile" ||
		props.type == "settings" ||
		props.type == "workout"
			? "jumboProfileScale"
			: "null";
	return (
		<div className={`row jumboWrapper ${props.image} ${jumboImageClass}`}>
			<div className="container-fluid jumboContent">
				{!aboutRegister && (
					<React.Fragment>
						<div className="row">
							<h1 className="col-md-6 offset-md-1 jumboText">
								{props.jumboText}
							</h1>
						</div>
						<div className="row">
							{jumboDesc && (
								<div className="jumboDesc offset-md-1 col-md-5">
									{props.desc}
								</div>
							)}
						</div>
					</React.Fragment>
				)}
				{aboutRegister && (
					<React.Fragment>
						<div className="row">
							<div className="col-md-6 rowsDown mb-4">
								<div className="container-flex align-items-end">
									<div className="row">
										<h1 className="col-10 offset-1 jumboText">
											{props.jumboText}
										</h1>
									</div>
									<div className="row">
										{jumboDesc && (
											<div className="col-10 offset-1 jumboDesc">
												{props.desc}
											</div>
										)}
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<DoubleGallery />
							</div>
						</div>
					</React.Fragment>
				)}
				{serviceSelector && <ServicesSelector />}

				<div className="row mt-3">{homeRegister && <RegisterField />}</div>
			</div>
			<img src={topPartWhite} className="topPartWhite" />
		</div>
	);
};

export default Jumbo;
