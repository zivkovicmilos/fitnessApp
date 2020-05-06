import React from "react";
import profile from "../../assets/img/profile.jpeg";

const ProfileImg = () => {
	return (
		<div className="container-fluid profileCard mb-5">
			<div className="row centerRowX">
				<div class="card justify-content-center">
					<img src={profile} class="card-img-top" alt="Image error!!!" />
					<div class="card-body">
						<h2 class="card-title mb-3">Miloš Živković</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileImg;
