import React from "react";
import testImg from "../../assets/img/showcase1.jpg";

const SectionListItem = (props) => {
	let { title, duration, level, description } = props;
	return (
		<div className="row centerRow sectionListItem">
			<div className="col-lg-2 col-md-3 offset-lg-1 offset-md-1 col-sm-10 col-10">
				<img src={testImg} className="typeImg" />
			</div>
			<div className="col-lg-5 col-md-5 col-sm-10 col-10">
				<div className="row centerRowY">
					<span className="typeTitle">{title}</span>
					<span className="typeInfo">{" · " + duration + " · " + level}</span>
				</div>
				<div className="row typeDesc">{description}</div>
			</div>
		</div>
	);
};

export default SectionListItem;
