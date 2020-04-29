import React from "react";
import SectionListItem from "./SectionListItem";

const SectionList = (props) => {
	return (
		<div className="sectionList">
			<div className="row">
				<div className="col-md-2 offset-md-3 typeSort">
					<span className="typeSortActive">IME</span>
					<span>|</span>
					<span>TRAJANJE</span>
					<span>|</span>
					<span>NIVO</span>
				</div>
			</div>

			<SectionListItem
				title="Naslov 1"
				duration="45 min"
				level="Nivo 1"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec dui sollicitudin lobortis vel eget mi. Praesent posuere pellentesque augue at pulvinar. Cras egestas dignissim sodales. Aenean elementum enim gravida, tempor turpis sit amet, bibendum lacus..."
			/>
			<SectionListItem
				title="Naslov 1"
				duration="45 min"
				level="Nivo 1"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec dui sollicitudin lobortis vel eget mi. Praesent posuere pellentesque augue at pulvinar. Cras egestas dignissim sodales. Aenean elementum enim gravida, tempor turpis sit amet, bibendum lacus..."
			/>
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
