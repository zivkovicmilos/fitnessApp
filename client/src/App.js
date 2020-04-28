import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Usluge from "./components/layout/Usluge";
import ONama from "./components/layout/ONama";
import Zakazivanje from "./components/layout/Zakazivanje";
import "./App.css";

const App = () => (
	<Router>
		<Fragment>
			<Route exact path="/" component={Home} />
			<Switch>
				<Route exact path="/usluge" component={Usluge} />
				<Route exact path="/oNama" component={ONama} />
				<Route exact path="/zakazivanje" component={Zakazivanje} />
			</Switch>
		</Fragment>
	</Router>
);

export default App;
