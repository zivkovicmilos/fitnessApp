import React from "react";

const Loading = () => {
	return (
		<div className="container-fluid">
			<div className="row loadingRow centerRow">
				<div className="lds-grid">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
