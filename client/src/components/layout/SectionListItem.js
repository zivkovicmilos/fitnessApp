import React from "react";
import testImg from "../../assets/img/showcase1.jpg";

const SectionListItem = (props) => {
	let { title, duration, level, description } = props;
	return (
		<div className="row centerRow sectionListItem">
			<div className="col-md-2 offset-md-1">
				<img src={testImg} className="typeImg" />
			</div>
			<div className="col-md-5">
				<div className="row">
					<span className="typeTitle">{title}</span>
					<span className="typeInfo">
						{" · " + duration + " · " + level}
					</span>
				</div>
				<div className="row typeDesc">{description}</div>
			</div>
		</div>
	);
};

export default SectionListItem;
