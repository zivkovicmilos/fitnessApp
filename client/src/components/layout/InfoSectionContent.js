import React, { Fragment } from "react";
import ServicesForm from "./ServicesForm";

const InfoSectionContent = (props) => {
	if (props.section == "infoTreninzi") {
		return (
			<Fragment>
				<div className="row centerRow">
					<h2 className="col-md-10 col-10">Naslov 1</h2>
					<span className="sectionText col-md-10 col-10">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						accumsan vitae nisi non vehicula. Nulla rutrum orci sed lacinia
						efficitur. Donec vitae erat cursus, lobortis tortor sit amet,
						pellentesque mi. Donec et dapibus nisl. Maecenas tincidunt iaculis
						venenatis. Aenean molestie lorem nec facilisis lacinia.
					</span>
				</div>
				<div className="row centerRow mt-5">
					<h2 className="col-md-10 col-10 text-right">Naslov 2</h2>
					<span className="sectionText col-md-10 col-10">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						accumsan vitae nisi non vehicula. Nulla rutrum orci sed lacinia
						efficitur. Donec vitae erat cursus, lobortis tortor sit amet,
						pellentesque mi. Donec et dapibus nisl. Maecenas tincidunt iaculis
						venenatis. Aenean molestie lorem nec facilisis lacinia.
					</span>
				</div>
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<div className="row centerRow">
					<h2 className="col-md-10 col-10">Naslov 1</h2>
					<span className="sectionText col-md-10 col-10">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						accumsan vitae nisi non vehicula. Nulla rutrum orci sed lacinia
						efficitur. Donec vitae erat cursus, lobortis tortor sit amet,
						pellentesque mi. Donec et dapibus nisl. Maecenas tincidunt iaculis
						venenatis. Aenean molestie lorem nec facilisis lacinia.
					</span>
				</div>
				<div className="row centerRow">
					<ServicesForm section={props.section} />
				</div>
			</Fragment>
		);
	}
};

export default InfoSectionContent;
