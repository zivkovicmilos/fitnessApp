import React from "react";
import location from "../../assets/svg/about/pin.svg";
import clock from "../../assets/svg/about/clock.svg";
import phone from "../../assets/svg/about/phone.svg";

const ContactInfo = () => {
	return (
		<div class="container">
			<div class="row centerRowY">
				<div class="contactIcon d-flex justify-content-center">
					<img src={location} />
				</div>
				<div class="col align-bottom">
					Bulevar Kralja Aleksandra 73, Beograd
				</div>
			</div>
			<div class="row justify-content-around">
				<div class="col">
					<div class="contactIcon d-flex justify-content-center">
						<img src={clock} />
					</div>
					00-24
				</div>
			</div>
			<div class="row justify-content-around">
				<div class="col-6">
					<div class="contactIcon d-flex justify-content-center">
						<img src={[phone]} />
					</div>
					+381 123456789
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
