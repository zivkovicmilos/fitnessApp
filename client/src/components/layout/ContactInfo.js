import React from "react";
import location from "../../assets/svg/about/pin.svg";
import clock from "../../assets/svg/about/clock.svg";
import phone from "../../assets/svg/about/phone.svg";

const ContactInfo = () => {
	return (
		<React.Fragment>
			<div class="form-row centerRowY">
				<div className="col-12 myRow">
					<div class="contactIcon d-flex justify-content-center">
						<img src={location} />
					</div>
					<span className="pl-3">
						Bulevar Kralja Aleksandra 73, Beograd
					</span>
				</div>
			</div>
			<div class="form-row">
				<div class="col-6 myRow">
					<div class="contactIcon d-flex justify-content-center">
						<img src={clock} />
					</div>
					<span className="pl-3">00-24</span>
				</div>
				<div class="col-6 myRow">
					<div class="contactIcon d-flex justify-content-center">
						<img src={[phone]} />
					</div>
					<span className="pl-3">+381 123 456 789</span>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ContactInfo;
