import React from "react";
import SectionListItem from "./SectionListItem";

const SectionList = (props) => {
	return (
		<div>
			<SectionListItem
				title="Naslov 1"
				duration="45 min"
				level="Nivo 1"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec dui sollicitudin lobortis vel eget mi. Praesent posuere pellentesque augue at pulvinar. Cras egestas dignissim sodales. Aenean elementum enim gravida, tempor turpis sit amet, bibendum lacus..."
			/>
		</div>
	);
};

export default SectionList;
