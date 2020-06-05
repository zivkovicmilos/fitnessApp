import React from "react";
import mail from "../../assets/svg/about/mail.svg";
import face from "../../assets/svg/about/facebook.svg";
import insta from "../../assets/svg/about/instagram.svg";
import ytb from "../../assets/svg/about/youtube.svg";

const ContactSocial = () => {
	return (
		<div class="row centerRowX">
			<div class=" col-1 social">
				<a href="mailto:milos@zmilos.com">
					<img src={mail} />
				</a>
			</div>
			<div class="offset-lg-2 col-1 social">
				<a href="https://www.facebook.com/nsfserbia/" target="_blank">
					<img src={face} draggable="false" />
				</a>
			</div>
			<div class="offset-lg-2 col-1 social">
				<a
					href="https://www.instagram.com/nonstopfitness_serbia/"
					target="_blank"
				>
					<img src={insta} draggable="false" />
				</a>
			</div>
			<div class="offset-lg-2 col-1 social">
				<a
					href="https://www.youtube.com/channel/UCNsw0yEc3zWIheTB0HcpW5A"
					target="_blank"
				>
					<img src={ytb} draggable="false" />
				</a>
			</div>
		</div>
	);
};

export default ContactSocial;
