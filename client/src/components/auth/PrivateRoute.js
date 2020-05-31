import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { store } from "./../context/Store";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const globalState = useContext(store);

	return (
		<Route
			{...rest}
			render={(props) =>
				globalState.state.isAuthenticated === true ? (
					<Component {...props} />
				) : (
					<Redirect to="/" />
				)
			}
		/>
	);
};

export default PrivateRoute;
