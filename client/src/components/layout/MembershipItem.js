import React from "react";
import checkMark from "../../assets/svg/checkMark.svg";

const MembershipItem = (props) => {
	return (
		<div className="col-sm-12 col-md-3 col-md-offset-1">
			<div class="membershipBox">
				<h3 className="membershipTitle">{props.name}</h3>
				<h3 className="membershipPrice">{props.price}</h3>
				{props.membershipItems.map((item, i) => {
					return (
						<div className="membershipItemRow">
							<span className="membershipItem">{item}</span>
							<img src={checkMark} className="icon" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MembershipItem;
