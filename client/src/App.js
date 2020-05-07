import React, { Fragment } from "react";
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

const App = () => (
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
				<Route path="/usluge/treninzi/:id" component={Workout} />
			</Switch>
		</Fragment>
	</Router>
);

export default App;
