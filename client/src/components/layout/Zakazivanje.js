import React, { useState, useEffect } from "react";
import Table from "./Zakazivanje/Table";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Footer from "./Footer";

const Zakazivanje = () => {
	const [yoga, setYoga] = useState(true);
	const [pilates, setPilates] = useState(true);
	const [core, setCore] = useState(true);
	const [cardio, setCardio] = useState(true);

	const insertAfter = (referenceNode, newNode) => {
		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	};

	const getNext = (time) => {
		switch (time) {
			case "17:00":
				return "17:30";
			case "17:30":
				return "18:00";
			case "18:00":
				return "18:30";
			case "18:30":
				return "19:00";
			case "19:00":
				return "19:30";
			case "19:30":
				return "20:00";
			case "20:00":
				return "20:30";
			case "20:30":
				return "21:00";
			case "21:00":
				return "21:30";
			case "21:30":
				return "22:00";
		}
	};

	const wipeElements = (workouts) => {
		while (workouts.length > 0) {
			let workout = workouts[0];
			console.log(workout.rowSpan);
			try {
				let parent = workout.parentNode;
				let refTime = parent.id;

				let newTd = document.createElement("td");
				insertAfter(workout, newTd);

				//let index = 0;
				//while ((workout = workout.previousSibling) != null) index++;
				let index = [].indexOf.call(workout.parentNode.children, workout);
				console.log(`Index is ${index}`);

				if (workout.rowSpan > 1) {
					for (let i = 1; i < workout.rowSpan; i++) {
						let reference = document.getElementById(getNext(refTime));
						refTime = getNext(refTime);

						// TODO Append at a very specific index
						//reference.appendChild(document.createElement("td"));
						reference.insertBefore(
							document.createElement("td"),
							reference.childNodes[index]
						);
					}
				}

				parent.removeChild(workout);
			} catch (err) {
				console.log(`Error: ${err}`);
			}
		}
	};

	useEffect(() => {
		if (!yoga) {
			let workouts = document.getElementsByClassName("yoga");
			console.log(`I got ${workouts.length} workouts!`);

			wipeElements(workouts);
		}
	}, [yoga]);

	useEffect(() => {
		if (!pilates) {
			let workouts = document.getElementsByClassName("pilates");
			console.log(`I got ${workouts.length} workouts!`);

			wipeElements(workouts);
		}
	}, [pilates]);

	useEffect(() => {
		if (!core) {
			let workouts = document.getElementsByClassName("core");
			console.log(`I got ${workouts.length} workouts!`);

			wipeElements(workouts);
		}
	}, [core]);

	useEffect(() => {
		if (!cardio) {
			let workouts = document.getElementsByClassName("cardio");
			console.log(`I got ${workouts.length} workouts!`);

			wipeElements(workouts);
		}
	}, [cardio]);

	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbo
				type="reservation"
				desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Mauris id ligula consequat, eleifend neque convallis,
			bibendum tellus."
				jumboText="Zakažite Vaš termin"
				image="jumboZakazivanje"
			/>
			<div className="row centerRow">
				<h1
					className="pageTitle col offset-1 
				"
				>
					NEDELJNI KALENDAR
				</h1>
			</div>
			<div className="row centerRowX">
				<div className="col-xs-3">
					<div className="filtersNew mb-3">
						<h3 className="mb-0 mr-3">FILTERI</h3>
						<form>
							<div className="custom-control custom-checkbox">
								<input
									type="checkbox"
									className="custom-control-input"
									id="yogaCheck"
									checked={yoga}
									onChange={() => {
										setYoga(!yoga);
									}}
								/>
								<label className="custom-control-label" htmlFor="yogaCheck">
									Yoga
								</label>
							</div>
							<div className="custom-control custom-checkbox">
								<input
									type="checkbox"
									className="custom-control-input"
									id="pilatesCheck"
									checked={pilates}
									onChange={() => {
										setPilates(!pilates);
									}}
								/>
								<label className="custom-control-label" htmlFor="pilatesCheck">
									Pilates
								</label>
							</div>
							<div className="custom-control custom-checkbox">
								<input
									type="checkbox"
									className="custom-control-input"
									id="coreCheck"
									checked={core}
									onChange={() => {
										setCore(!core);
									}}
								/>
								<label className="custom-control-label" htmlFor="coreCheck">
									Core
								</label>
							</div>
							<div className="custom-control custom-checkbox">
								<input
									type="checkbox"
									className="custom-control-input"
									id="cardioCheck"
									checked={cardio}
									onChange={() => {
										setCardio(!cardio);
									}}
								/>
								<label className="custom-control-label" htmlFor="cardioCheck">
									Cardio
								</label>
							</div>
						</form>
					</div>
				</div>
				<div className="col-md-auto col-xs-12">
					<Table />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Zakazivanje;
