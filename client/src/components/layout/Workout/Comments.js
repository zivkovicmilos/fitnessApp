import React, { Fragment, useState, useEffect } from "react";
import Comment from "./Comment";

import left from "../../../assets/svg/about/arrowLeft.svg";
import right from "../../../assets/svg/about/arrowRight.svg";

const Comments = (props) => {
	let [commentIndex, setCommentIndex] = useState(2);

	let { reviews } = props;
	let comments = [];
	let slider = false;
	let currentlyShowing = [];

	const fillCurrent = () => {
		currentlyShowing.splice(0, currentlyShowing.length);

		for (
			let i = commentIndex - 2;
			i < comments.length && i < commentIndex;
			i++
		) {
			currentlyShowing.push(comments[i]);
		}
	};

	useEffect(() => {}, [commentIndex]);

	if (reviews === undefined || reviews.length == 0) {
		// Reviews are not fetched yet or they don't exist
		return (
			<Fragment>
				<span>No comments yet :(</span>
			</Fragment>
		);
	} else {
		reviews.map((review) => {
			if (review.comment != "") {
				comments.push(review);
			}
		});

		if (comments.length > 2) {
			slider = true;
		}

		fillCurrent();
		return (
			<Fragment>
				{currentlyShowing.map((comment) => (
					<Comment
						key={comment.user}
						authorId={comment.user}
						text={comment.comment}
					/>
				))}
				{slider && (
					<div className="row">
						<div className="mr-3">
							<div
								className="arrows d-flex justify-content-center commentSlider"
								onClick={() => {
									if (commentIndex - 2 <= 0) {
										setCommentIndex(2);
										return;
									}

									setCommentIndex(commentIndex - 2);
								}}
							>
								<img src={left} />
							</div>
						</div>
						<div className="">
							<div
								className="arrows d-flex justify-content-center commentSlider"
								onClick={() => {
									if (commentIndex + 2 <= comments.length + 1) {
										setCommentIndex(commentIndex + 2);
									}
								}}
							>
								<img src={right} />
							</div>
						</div>
					</div>
				)}
			</Fragment>
		);
	}
};

export default Comments;
