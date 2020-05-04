import React from "react";
import profile from "../../assets/img/profile.jpeg";

const ProfileImg = () => {
	return (
		<div className="container-fluid profileCard">
			<div className="row centerRowX">
				<div class="card justify-content-center">
					<img
						src={profile}
						class="card-img-top"
						alt="Image error!!!"
					/>
					<div class="card-body">
						<h5 class="card-title">Miloš Živković</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileImg;
