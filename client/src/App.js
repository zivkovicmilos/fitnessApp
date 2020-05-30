import React, { Fragment, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Usluge from "./components/layout/Usluge";
import ONama from "./components/layout/ONama";
import Zakazivanje from "./components/layout/Zakazivanje";
import Profile from "./components/layout/Profile";
import Settings from "./components/layout/Settings";
import Workout from "./components/layout/Workout";
import { store } from "./components/context/Store";
import axios from "axios";
import Loading from "./components/layout/Loading";

const App = () => {
	const globalState = useContext(store);
	const { dispatch } = globalState;
	console.log("Getting loaded...");
	useEffect(() => {
		const fetchData = async () => {
			if (localStorage.getItem("token") != null) {
				axios.defaults.headers.common["x-auth-token"] = `${localStorage
					.getItem("token")
					.replace(/"/g, "")}`;
			} else {
				axios.defaults.headers.common["x-auth-token"] = null;
			}

			try {
				const res = await axios.get("/api/auth");

				dispatch({
					type: "LOAD_USER",
					payload: res.data
				});
			} catch (err) {
				console.log(err);
				dispatch({
					type: "AUTH_FAIL"
				});
			}
		};

		fetchData();
	}, []);

	return (
		<Router>
			<Fragment>
				<Route exact path="/" component={Home} />
				<Switch>
					<Route exact path="/usluge/podesavanja" component={Settings} />
					<Route exact path="/usluge/profil" component={Profile} />
					<Route exact path="/usluge/treninzi" component={Usluge} />
					<Route exact path="/usluge/nutricionista" component={Usluge} />
					<Route exact path="/usluge/masaze" component={Usluge} />
					<Route exact path="/onama" component={ONama} />
					<Route exact path="/zakazivanje" component={Zakazivanje} />
					<Route exact path="/profil" component={Profile} />
					<Route exact path="/profil/podesavanja" component={Settings} />
					<Route exact path="/loading" component={Loading} />
					<Route path="/usluge/treninzi/:id" component={Workout} />
				</Switch>
			</Fragment>
		</Router>
	);
};

export default App;
