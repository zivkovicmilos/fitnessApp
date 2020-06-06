import React, { useState, useEffect, useContext } from "react";
import Table from "./Zakazivanje/Table";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Footer from "./Footer";
import { store } from "./../context/Store";
import { sr, en } from "./../../dict";

const Zakazivanje = () => {
	const globalState = useContext(store);
	let { lang } = globalState.state;

	const [yoga, setYoga] = useState(true);
	const [yogaEls, setYogaEls] = useState([]);

	const [pilates, setPilates] = useState(true);
	const [pilatesEls, setPilatesEls] = useState([]);

	const [core, setCore] = useState(true);
	const [coreEls, setCoreEls] = useState([]);

	const [cardio, setCardio] = useState(true);
	const [cardioEls, setCardioEls] = useState([]);

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

	const wipeElements = (workouts, type) => {
		switch (type) {
			case "yoga":
				setYogaEls([]);
				break;
			case "pilates":
				setPilatesEls([]);
				break;
			case "core":
				setCoreEls([]);
				break;
			case "cardio":
				setCardioEls([]);
				break;
		}

		while (workouts.length > 0) {
			let workout = workouts[0];
			try {
				let parent = workout.parentNode;
				let refTime = parent.id;

				let index = [].indexOf.call(workout.parentNode.children, workout);

				let arrElement = {
					parent: workout.parentNode,
					element: workout,
					index: index,
					added: []
				};

				let newTd = document.createElement("td");
				insertAfter(workout, newTd);
				arrElement.added.push(newTd);

				if (workout.rowSpan > 1) {
					for (let i = 1; i < workout.rowSpan; i++) {
						let reference = document.getElementById(getNext(refTime));
						refTime = getNext(refTime);

						let td = document.createElement("td");

						reference.insertBefore(td, reference.childNodes[index]);

						arrElement.added.push(td);
					}
				}

				switch (type) {
					case "yoga":
						setYogaEls((yogaEls) => [...yogaEls, arrElement]);
						break;
					case "pilates":
						setPilatesEls((pilatesEls) => [...pilatesEls, arrElement]);
						break;
					case "core":
						setCoreEls((coreEls) => [...coreEls, arrElement]);
						break;
					case "cardio":
						setCardioEls((cardioEls) => [...cardioEls, arrElement]);
						break;
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

			wipeElements(workouts, "yoga");
		} else {
			yogaEls.forEach((el) => {
				// Remove the added TD's
				el.added.forEach((addedEl) => {
					let reference = addedEl.parentNode;

					reference.removeChild(addedEl);
				});

				// Return the original TD to the parent, at a special index
				let parent = document.getElementById(el.parent.id);
				parent.insertBefore(el.element, parent.childNodes[el.index]);
			});
		}
	}, [yoga]);

	useEffect(() => {
		if (!pilates) {
			let workouts = document.getElementsByClassName("pilates");

			wipeElements(workouts, "pilates");
		} else {
			pilatesEls.forEach((el) => {
				// Remove the added TD's
				el.added.forEach((addedEl) => {
					let reference = addedEl.parentNode;

					reference.removeChild(addedEl);
				});

				// Return the original TD to the parent, at a special index
				let parent = document.getElementById(el.parent.id);
				parent.insertBefore(el.element, parent.childNodes[el.index]);
			});
		}
	}, [pilates]);

	useEffect(() => {
		if (!core) {
			let workouts = document.getElementsByClassName("core");

			wipeElements(workouts, "core");
		} else {
			coreEls.forEach((el) => {
				// Remove the added TD's
				el.added.forEach((addedEl) => {
					let reference = addedEl.parentNode;

					reference.removeChild(addedEl);
				});

				// Return the original TD to the parent, at a special index
				let parent = document.getElementById(el.parent.id);
				parent.insertBefore(el.element, parent.childNodes[el.index]);
			});
		}
	}, [core]);

	useEffect(() => {
		if (!cardio) {
			let workouts = document.getElementsByClassName("cardio");

			wipeElements(workouts, "cardio");
		} else {
			cardioEls.forEach((el) => {
				// Remove the added TD's
				el.added.forEach((addedEl) => {
					let reference = addedEl.parentNode;

					reference.removeChild(addedEl);
				});

				// Return the original TD to the parent, at a special index
				let parent = document.getElementById(el.parent.id);
				parent.insertBefore(el.element, parent.childNodes[el.index]);
			});
		}
	}, [cardio]);

	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbo
				type="reservation"
				desc={lang == "sr" ? sr.zakazivanje.desc : en.zakazivanje.desc}
				jumboText={
					lang == "sr" ? sr.zakazivanje.jumboText : en.zakazivanje.jumboText
				}
				image="jumboZakazivanje"
			/>
			<div className="row centerRow">
				<h1
					className="pageTitle col offset-1 
				"
				>
					{lang == "sr" ? sr.zakazivanje.title : en.zakazivanje.title}
				</h1>
			</div>
			<div className="row centerRowX">
				<div className="filtersNew mb-3">
					<h3 className="mb-0 mr-3">
						{lang == "sr" ? sr.zakazivanje.filters : en.zakazivanje.filters}
					</h3>
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
			<Table />

			<Footer />
		</div>
	);
};

export default Zakazivanje;
