import React from "react";
import checkMark from "../../assets/svg/checkMark.svg";

const MembershipItem = (props) => {
	return (
		<div className="col-lg-4 col-md-6 homeItems">
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
