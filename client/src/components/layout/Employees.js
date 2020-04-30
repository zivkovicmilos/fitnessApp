import React from "react";
import Employee from "./Employee";
import Milos from "../../assets/img/milos.png";

const Employees = (props) => {
	return (
		<div class="container-fluid aboutContainer">
			<h1>OSVOJILI SMO,</h1>
			<br />
			<div class="row">
				<div class="offset-sm-1 col-sm-2 col-xs-4">
					<Employee image={Milos} />
				</div>
				<div class="offset-sm-2 col-sm-2 col-xs-4">
					<Employee image={Milos} />
				</div>

				<div class="offset-sm-2 col-sm-2 col-xs-4">
					<Employee image={Milos} />
				</div>
			</div>
			<div class="row">
				<div class="offset-sm-1 col-sm-2 col-xs-4">
					<Employee image={Milos} />
				</div>
				<div class="offset-sm-2 col-sm-2 col-xs-4">
					<Employee image={Milos} />
				</div>

				<div class="offset-sm-2 col-sm-2 col-xs-4">
					<Employee image={Milos} />
				</div>
			</div>
		</div>
	);
};

export default Employees;
