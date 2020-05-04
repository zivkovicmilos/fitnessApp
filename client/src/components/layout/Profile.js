import React from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Termini from "./Termini";
import ProfileImg from "./ProfileImg";
import Footer from "./Footer";

const Profile = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbo type="profile" image="jumboProfile" />
			<ProfileImg />
			<Termini />
			<Footer color="white" />
		</div>
	);
};

export default Profile;
