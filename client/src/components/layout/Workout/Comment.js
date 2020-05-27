import React, { useState, useEffect } from "react";
import axios from "axios";

const Comment = (props) => {
	let { authorId, text } = props;
	let [user, setUser] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let res = await axios.get(`/api/users/${authorId}`);
				setUser(res.data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	if (user == null) {
		return (
			<div className="row mb-3">
				<div className="col-md-1  userColumn">
					<img
						src="https://via.placeholder.com/150"
						className="userIcon mb-1"
					/>
					<span className="commentUserName">Fetching...</span>
				</div>
				<div className="col-md-8 text-justify">
					<span className="comment">Fetching comment...</span>
				</div>
			</div>
		);
	} else {
		return (
			<div className="row mb-3">
				<div className="col-md-1  userColumn">
					<img src={user.avatar} className="userIcon mb-1" />
					<span className="commentUserName">{user.firstName}</span>
				</div>
				<div className="col-md-8 text-justify">
					<span className="comment">{text}</span>
				</div>
			</div>
		);
	}
};

export default Comment;
