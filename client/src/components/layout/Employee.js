import React from "react";

const Employee = (props) => {
	return (
		<div class="card">
			<img src={props.image} class="card-img-top" alt="Image error!!!" />
			<div class="card-body">
				<h5 class="card-title">Nagrada Milosa Zivkovica</h5>
				<p class="card-text">
					Nagradu za najbolje treninge joge i pilatesa u Evropi.
				</p>
			</div>
		</div>
	);
};

export default Employee;
