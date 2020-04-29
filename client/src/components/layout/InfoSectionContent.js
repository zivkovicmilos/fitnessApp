import React, { Fragment } from "react";
import ServicesForm from "./ServicesForm";

const InfoSectionText = () => {
	return (
		<Fragment>
			<div className="row">
				<h2>Naslov 1</h2>
			</div>
			<div className="row">
				<span className="sectionText">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nunc accumsan vitae nisi non vehicula. Nulla rutrum orci sed
					lacinia efficitur. Donec vitae erat cursus, lobortis tortor
					sit amet, pellentesque mi. Donec et dapibus nisl. Maecenas
					tincidunt iaculis venenatis. Aenean molestie lorem nec
					facilisis lacinia.
				</span>
			</div>
			<div className="row">
				<ServicesForm />
			</div>
		</Fragment>
	);
};

export default InfoSectionText;
