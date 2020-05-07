import React, { Fragment, useContext, useEffect } from "react";
import LoginForm from "../auth/LoginForm";
import { store } from "../context/Store";
import { Link } from "react-router-dom";
import userIcon from "../../assets/svg/user/user.svg";
import settingsIcon from "../../assets/svg/user/settings.svg";
import logoutIcon from "../../assets/svg/user/logout.svg";

const User = () => {
	const globalState = useContext(store);

	if (!globalState.state.isAuthenticated || globalState.state.isLoading) {
		// User is not logged in, display the login button
		return <LoginForm />;
	} else {
		// User is logged in, display the user's menu icon
		return (
			<Fragment>
				<div className="userSection">
					<div
						onClick={() => {
							document
								.getElementById("userMenu")
								.classList.toggle("menuActive");
						}}
					>
						<img
							src="https://via.placeholder.com/150"
							className="userIcon ml-4"
						/>
						<span className="userName ml-2">Miloš</span>
					</div>
					<div className="userMenu" id="userMenu">
						<ul>
							<li>
								<Link
									to="/profil"
									onClick={() => {
										document
											.getElementById("userMenu")
											.classList.toggle("menuActive");
									}}
								>
									<img src={userIcon} className="menuIcon" />
									Moj nalog
								</Link>
							</li>
							<li>
								<Link
									to="/profil/podesavanja"
									onClick={() => {
										document
											.getElementById("userMenu")
											.classList.toggle("menuActive");
									}}
								>
									<img src={settingsIcon} className="menuIcon" />
									Podešavanja
								</Link>
							</li>
							<li className="mb-0">
								<img src={logoutIcon} className="menuIcon" />
								Odjava
							</li>
						</ul>
					</div>
				</div>
			</Fragment>
		);
	}
};

export default User;
