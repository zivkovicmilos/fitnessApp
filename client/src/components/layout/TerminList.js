import React, { useState, useEffect, useContext, Fragment } from "react";
import TerminListItem from "./TerminListItem";
import Sad from "../../assets/svg/sad.svg";
import { store } from "./../context/Store";
import axios from "axios";

const TerminList = (props) => {
	const globalState = useContext(store);
	const [workouts, setWorkouts] = useState([]);
	let { user } = globalState.state;

	const getDayName = (day) => {
		switch (day) {
			case 1:
				return "Ponedeljak";
			case 2:
				return "Utorak";
			case 3:
				return "Sreda";
			case 4:
				return "Četvrtak";
			case 5:
				return "Petak";
			case 6:
				return "Subota";
			case 0:
				return "Nedelja";
			default:
				return "error";
		}
	};

	const myLittleFunc = () => {
		console.log(user.workouts);
	};

	useEffect(() => {
		user = globalState.state.user;
		if (!user) return;

		setWorkouts([]);
		const func = async () => {
			user.workouts.map(async (workout) => {
				let res = await axios.get(`/api/workouts/id/${workout.workoutID}`);

				let workoutInfo = {
					axiosRes: res.data,
					workoutData: workout
				};

				setWorkouts((workouts) => [...workouts, workoutInfo]);
			});
		};

		func();
	}, [user.workouts]);

	return (
		<Fragment>
			<div className="container-fluid">
				{workouts.map((resWorkout) => (
					<TerminListItem
						key={resWorkout.axiosRes._id}
						title={resWorkout.axiosRes.name}
						subtitle={`${getDayName(resWorkout.workoutData.day)} ${
							resWorkout.workoutData.date
						} ${resWorkout.workoutData.time}`}
						text={resWorkout.axiosRes.descriptionSR}
						image={resWorkout.axiosRes.picture}
						workoutID={resWorkout.axiosRes._id}
						workoutDate={resWorkout.workoutData.date}
						workoutTime={resWorkout.workoutData.time}
					/>
				))}
			</div>

			{workouts.length < 1 && (
				<Fragment>
					<div className="col-12 sad mb-4">
						<img src={Sad}></img>
					</div>
					<div className="col-12 sad">
						<h2 className="text-center">Nemate zakazane termine</h2>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default TerminList;
