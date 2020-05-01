import React from "react";
import location from "../../assets/svg/about/pin.svg";

const ContactInfo = () => {
	return (
		<div class="container">
			<div class="row">
				<div class="icon d-flex justify-content-center">
					<img src={location} />
				</div>
				<div class="col align-bottom">
					Bulevar Kralja Aleksandra 73, Beograd
				</div>
			</div>
			<div class="row justify-content-around">
				<div class="col-3">00-24</div>
				<div class="col-6">+381 123456789</div>
			</div>
		</div>
	);
};

export default ContactInfo;
