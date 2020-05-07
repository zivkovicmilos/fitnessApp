import React from "react";
import pencil from "../../../assets/svg/pencil.svg";

const ReviewButton = () => {
	return (
		<button className="reviewButton button" type="submit">
			Ostavi ocenu
			<img src={pencil} className="icon" />
		</button>
	);
};

export default ReviewButton;
