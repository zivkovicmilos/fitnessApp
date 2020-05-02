import React from "react";

const ContactMap = () => {
	return (
		<div class="row mapRow">
			<div class="col-12 justify-content-center">
				<div class="map">
					<div class="gmap_canvas">
						<iframe
							id="gmap_canvas"
							src="https://maps.google.com/maps?ll=44.804393416908226,20.48591827826066&q=&t=&z=18&ie=UTF8&iwloc=&output=embed"
							scrolling="no"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactMap;
