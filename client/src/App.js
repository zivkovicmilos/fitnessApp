import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import "./App.css";

const App = () => (
	<Router>
		<Fragment>
			<Home />
		</Fragment>
	</Router>
);

export default App;
