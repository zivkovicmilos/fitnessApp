import React from "react";

const Comment = () => {
	return (
		<div className="row mb-3">
			<div className="col-md-1  userColumn">
				<img src="https://via.placeholder.com/150" className="userIcon mb-1" />
				<span className="commentUserName">Miloš</span>
			</div>
			<div className="col-md-8 text-justify">
				<span className="comment">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex
					arcu, varius ut felis id, pellentesque cursus leo. Nam ligula nisl,
					venenatis quis quam ac, molestie interdum justo.
				</span>
			</div>
		</div>
	);
};

export default Comment;
