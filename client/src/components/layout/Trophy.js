import React from "react";

const Trophy = (props) => {
	return (
		<div class="card">
			<img src={props.image} class="card-img-top" alt="Image error!!!" />
			<div class="card-body">
				<h5 class="card-title">{props.title}</h5>
				<p class="card-text">{props.text}</p>
			</div>
		</div>
	);
};

export default Trophy;
