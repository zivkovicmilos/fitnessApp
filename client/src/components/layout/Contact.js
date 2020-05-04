import React from "react";
import ContactInfo from "./ContactInfo";
import ContactMail from "./ContactMail";
import ContactMap from "./ContactMap";
import ContactSocial from "./ContactSocial";

const Contact = () => {
	return (
		<div class="container-fluid contactContainer">
			<div class="row">
				<div class="col">
					<h1 className="pageTitle">STUPI U KONTAKT,</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-6">
					<ContactInfo />
					<ContactMail />
				</div>
				<div class="col-xs-12 col-sm-6 ">
					<ContactMap />
					<ContactSocial />
				</div>
			</div>
		</div>
	);
};

export default Contact;
