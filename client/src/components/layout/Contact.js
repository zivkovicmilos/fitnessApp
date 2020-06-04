import React, { useContext } from "react";
import ContactInfo from "./ContactInfo";
import ContactMail from "./ContactMail";
import ContactMap from "./ContactMap";
import ContactSocial from "./ContactSocial";
import { store } from "./../context/Store";
import { sr, en } from "./../../dict";

const Contact = () => {
	const globalState = useContext(store);
	let { lang } = globalState.state;

	return (
		<div class="container-fluid contactContainer">
			<div class="row">
				<div class="col">
					<h1 className="pageTitle">
						{lang == "sr" ? sr.contact.contactTitle : en.contact.contactTitle}
					</h1>
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
