import React from "react";
import Trophy from "./Trophy";
import Milos from "../../assets/img/milos.png";

const Trophies = (props) => {
	return (
		<div class="container-fluid aboutContainer">
			<h1>OSVOJILI SMO,</h1>
			<br />
			<div class="row center-row">
				<div class="offset-sm-1 col-sm-2 col-xs-4">
					<Trophy image={Milos} />
				</div>
				<div class="offset-sm-2 col-sm-2 col-xs-4">
					<Trophy image={Milos} />
				</div>

				<div class="offset-sm-2 col-sm-2 col-xs-4">
					<Trophy image={Milos} />
				</div>
			</div>
			<div class="row center-row">
				<div class="offset-sm-1 col-sm-2 col-xs-4">
					<Trophy image={Milos} />
				</div>
				<div class="offset-sm-2 col-sm-2 col-xs-4">
					<Trophy image={Milos} />
				</div>

				<div class="offset-sm-2 col-sm-2 col-xs-4">
					<Trophy image={Milos} />
				</div>
			</div>
		</div>
	);
};

export default Trophies;
