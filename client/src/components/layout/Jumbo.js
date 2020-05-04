import React, { useState, useEffect } from "react";
import ServicesSelector from "./ServicesSelector";
import RegisterField from "./Home/RegisterField";
import topPartWhite from "../../assets/svg/topPartWhite.svg";
import DoubleGallery from "./DoubleGallery";
import ProfileImg from "./ProfileImg";

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
	let profileRegister = props.type == "profile" ? true : false;
	return (
		<div className={`row jumboWrapper ${props.image}`}>
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
										<h1 className="col-12 offset-md-3 jumboText">
											{props.jumboText}
										</h1>
									</div>
									<div className="row">
										{jumboDesc && (
											<div className="col-12 offset-md-3 jumboDesc">
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

				<div className="row mt-3">
					{homeRegister && <RegisterField />}
				</div>
			</div>
			{profileRegister && <ProfileImg />}
			{!profileRegister && (
				<img src={topPartWhite} className="topPartWhite" />
			)}
		</div>
	);
};

export default Jumbo;
