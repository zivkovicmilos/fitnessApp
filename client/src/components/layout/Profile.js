import React from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Termini from "./Termini";

const Profile = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbo type="profile" image="jumboProfile" />
			<Termini />
		</div>
	);
};

export default Profile;
