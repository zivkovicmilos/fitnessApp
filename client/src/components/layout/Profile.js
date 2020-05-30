import React, { useContext } from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Termini from "./Termini";
import ProfileImg from "./ProfileImg";
import Footer from "./Footer";
import { store } from "./../context/Store";
import Loading from "./Loading";

const Profile = () => {
	const globalState = useContext(store);
	let { user } = globalState.state;

	if (!globalState.state.isAuthenticated || !user) {
		// User is not logged in, display dummy
		return <Loading />;
	} else {
		return (
			<div className="container-fluid">
				<Navbar />
				<Jumbo type="profile" image="jumboProfile" />
				<ProfileImg
					avatar={user ? user.avatar : ""}
					firstName={user ? user.firstName : ""}
					lastName={user ? user.lastName : ""}
				/>
				<Termini user={user} />
				<Footer color="white" />
			</div>
		);
	}
};

export default Profile;
