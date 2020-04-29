import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./components/context/Store";

const app = (
	<StateProvider>
		<App />
	</StateProvider>
);

ReactDOM.render(app, document.getElementById("root"));
