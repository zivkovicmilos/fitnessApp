import React, { Fragment, useContext, useEffect } from "react";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";
import { store } from "../context/Store";
import { Link } from "react-router-dom";
import userIcon from "../../assets/svg/user/user.svg";
import settingsIcon from "../../assets/svg/user/settings.svg";
import logoutIcon from "../../assets/svg/user/logout.svg";

const User = () => {
	const globalState = useContext(store);
	const { dispatch } = globalState;

	const { user } = globalState.state;

	if (
		!globalState.state.isAuthenticated ||
		globalState.state.isLoading ||
		!user
	) {
		// User is not logged in, display the login button
		return <LoginForm />;
	} else {
		// User is logged in, display the user's menu icon
		return (
			<Fragment>
				<div className="column dropdownColumn mr-2" id="timeColumn">
					<ul className="m-0">
						<li>
							<div className="column testColumn">
								<div>
									<img
										src={`${user ? user.avatar : ""}`}
										className="userIcon ml-4"
									/>
									<span className="userName ml-2">
										{user ? user.firstName : ""}
									</span>
								</div>
							</div>
							<ul className="dropdown ml-2">
								<Link to="/profil">
									<li>
										<img src={userIcon} className="menuIcon" />
										Moj nalog
									</li>
								</Link>

								<Link to="/profil/podesavanja">
									<li>
										<img src={settingsIcon} className="menuIcon" />
										Podešavanja
									</li>
								</Link>
								<li
									className="mb-0"
									onClick={() => {
										dispatch({
											type: "LOGOUT",
											payload: {}
										});
									}}
								>
									<img src={logoutIcon} className="menuIcon" />
									Odjava
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</Fragment>
		);
	}
};

export default User;
