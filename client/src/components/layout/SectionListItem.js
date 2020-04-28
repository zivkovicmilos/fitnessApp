import React from "react";

const SectionListItem = (props) => {
	let { title, duration, level, description } = props;
	return (
		<div className="row centerRow">
			<div className="col-md-2 offset-md-4">
				{
					//<img src={} className="typeImg" />
				}
				PICTURE
			</div>
			<div className="col-md-6">
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
