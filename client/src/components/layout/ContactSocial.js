import React from "react";
import mail from "../../assets/svg/about/mail.svg";
import face from "../../assets/svg/about/facebook.svg";
import insta from "../../assets/svg/about/instagram.svg";
import ytb from "../../assets/svg/about/youtube.svg";

const ContactSocial = () => {
	return (
		<div class="row centerRowX">
			<div class=" col-1 social">
				<img src={mail} />
			</div>
			<div class="offset-lg-2 col-1 social">
				<img src={face} />
			</div>
			<div class="offset-lg-2 col-1 social">
				<img src={insta} />
			</div>
			<div class="offset-lg-2 col-1 social">
				<img src={ytb} />
			</div>
		</div>
	);
};

export default ContactSocial;
