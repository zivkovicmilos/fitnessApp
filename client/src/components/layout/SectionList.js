import React, { useState, useEffect } from "react";
import SectionListItem from "./SectionListItem";
import axios from "axios";

const SectionList = (props) => {
	const [loading, setLoading] = useState(false);

	const [sortBy, setSort] = useState("name");
	const [selected, setSelected] = useState(`${props.type}SortName`);

	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(`/api/workouts/${props.type}`);
			setWorkouts(result.data);
		};

		fetchData();
	}, []);

	const changeSort = (type, newId) => {
		//console.log(`Old sort was ${sortBy}`);
		document.getElementById(selected).classList.remove("typeSortActive");
		document.getElementById(newId).classList.add("typeSortActive");
		setSelected(newId);

		setSort(type);
		//console.log(`New sort is ${type}`);
	};

	workouts.sort((a, b) => {
		switch (sortBy) {
			case "name": {
				return a.name.localeCompare(b.name);
			}
			case "duration": {
				return a.duration - b.duration;
			}
			case "level": {
				return a.level - b.level;
			}
		}
	});

	return (
		<div className="sectionList">
			<div className="row">
				<div className="col-lg-2 offset-lg-3 col-md-2 offset-md-2 col-sm-3 offset-sm-1 col-2 offset-1 typeSort">
					<span
						className="typeSortActive"
						id={`${props.type}SortName`}
						onClick={() => {
							changeSort("name", `${props.type}SortName`);
						}}
					>
						IME
					</span>
					<span className="sortSeparator">|</span>
					<span
						id={`${props.type}SortDuration`}
						onClick={() => {
							changeSort("duration", `${props.type}SortDuration`);
						}}
					>
						TRAJANJE
					</span>
					<span className="sortSeparator">|</span>
					<span
						id={`${props.type}SortLevel`}
						onClick={() => {
							changeSort("level", `${props.type}SortLevel`);
						}}
					>
						NIVO
					</span>
				</div>
			</div>
			{workouts.map((workout) => (
				<SectionListItem
					key={workout._id}
					image={workout.picture}
					title={workout.name}
					duration={`${workout.duration * 30} min.`}
					level={`Nivo ${workout.level}`}
					description={workout.descriptionSR}
				/>
			))}

			{/*
			<SectionListItem
				title="Naslov 1"
				duration="45 min"
				level="Nivo 1"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec dui sollicitudin lobortis vel eget mi. Praesent posuere pellentesque augue at pulvinar. Cras egestas dignissim sodales. Aenean elementum enim gravida, tempor turpis sit amet, bibendum lacus..."
			/>
			*/}
		</div>
	);
};

export default SectionList;
