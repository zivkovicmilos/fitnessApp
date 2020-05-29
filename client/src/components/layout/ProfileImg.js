import React from "react";
import profile from "../../assets/img/profile.jpeg";

const ProfileImg = (props) => {
	return (
		<div className="container-fluid profileCard mb-5">
			<div className="row centerRowX">
				<div className="card justify-content-center">
					<img
						src={props.avatar}
						className="card-img-top"
						alt="Image error!!!"
					/>
					<div className="card-body">
						<h2 className="card-title mb-3">{`${props.firstName} ${props.lastName}`}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileImg;
