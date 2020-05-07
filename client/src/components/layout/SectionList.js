import React, { useState, useEffect } from "react";
import SectionListItem from "./SectionListItem";
import { Link } from "react-router-dom";
import axios from "axios";

const SectionList = (props) => {
	const [loading, setLoading] = useState(false);

	const [sortBy, setSort] = useState("name");
	const [selected, setSelected] = useState(`${props.type}SortName`);

	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(`/api/workouts/type/${props.type}`);
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
				<Link to={`treninzi/${workout._id}`}>
					<SectionListItem
						key={workout._id}
						image={workout.picture}
						title={workout.name}
						duration={`${workout.duration * 30} min.`}
						level={`Nivo ${workout.level}`}
						description={workout.descriptionSR}
					/>
				</Link>
			))}
		</div>
	);
};

export default SectionList;
