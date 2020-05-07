import React, { useState, useEffect } from "react";
import Jumbo from "./Jumbo";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import WorkoutContent from "./WorkoutContent";

const Workout = () => {
	let { id } = useParams();
	const [workout, setWorkout] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(`/api/workouts/id/${id}`);
			setWorkout(result.data);
		};

		fetchData();
	}, []);

	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbo type="workout" image={workout.picture} />
			<WorkoutContent workoutData={workout} />
			<Footer />
		</div>
	);
};

export default Workout;
