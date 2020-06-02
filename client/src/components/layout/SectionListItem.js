import React from "react";

//require(image)

const SectionListItem = (props) => {
	let { image, title, duration, level, description } = props;
	return (
		<div className="row centerRow sectionListItem">
			<div
				className={`col-lg-2 col-md-3 offset-lg-1 offset-md-1 col-sm-10 col-10 typeImgNew ${image}`}
			></div>

			<div className="col-lg-5 col-md-5 col-sm-10 col-10 typeWrapper">
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
