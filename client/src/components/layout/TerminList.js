import React, { useState, useEffect, useContext, Fragment } from "react";
import TerminListItem from "./TerminListItem";
import Sad from "../../assets/svg/sad.svg";
import { store } from "./../context/Store";
import { sr, en } from "./../../dict";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TerminList = (props) => {
	const globalState = useContext(store);
	const [workouts, setWorkouts] = useState([]);

	let { user } = globalState.state;
	let { lang } = globalState.state;

	const getDayName = (day) => {
		switch (day) {
			case 1:
				return lang == "sr" ? sr.table.days.monday : en.table.days.monday;
			case 2:
				return lang == "sr" ? sr.table.days.tuesday : en.table.days.tuesday;
			case 3:
				return lang == "sr" ? sr.table.days.wednesday : en.table.days.wednesday;
			case 4:
				return lang == "sr" ? sr.table.days.thursday : en.table.days.thursday;
			case 5:
				return lang == "sr" ? sr.table.days.friday : en.table.days.friday;
			case 6:
				return lang == "sr" ? sr.table.days.saturday : en.table.days.saturday;
			case 0:
				return lang == "sr" ? sr.table.days.sunday : en.table.days.sunday;
			default:
				return "error";
		}
	};

	useEffect(() => {
		user = globalState.state.user;
		if (!user) return;

		setWorkouts([]);
		const func = async () => {
			user.workouts.map(async (workout, indx, arr) => {
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
				<TransitionGroup>
					{workouts.map((resWorkout) => (
						<CSSTransition
							key={resWorkout.axiosRes._id}
							timeout={500}
							classNames="slide"
						>
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
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>

			{workouts.length < 1 && (
				<Fragment>
					<div className="col-12 sad mb-4">
						<img src={Sad}></img>
					</div>
					<div className="col-12 sad">
						<h2 className="text-center">
							{lang == "sr"
								? sr.terminList.noTerminText
								: en.terminList.noTerminText}
						</h2>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default TerminList;
