import React from "react";
import SectionListItem from "./SectionListItem";

const SectionList = (props) => {
	return (
		<div className="sectionList">
			<div className="row">
				<div className="col-lg-2 offset-lg-3 col-md-2 offset-md-2 col-sm-3 offset-sm-1 col-2 offset-1 typeSort">
					<span className="typeSortActive">IME</span>
					<span className="sortSeparator">|</span>
					<span>TRAJANJE</span>
					<span className="sortSeparator">|</span>
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
