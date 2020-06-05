import React, { Fragment, useEffect, useState, useContext } from "react";
import close from "./../../../assets/svg/close.svg";
import axios from "axios";
import { store } from "./../../context/Store";
import { sr, en } from "./../../../dict";

const Table = () => {
	const globalState = useContext(store);
	let { user } = globalState.state;
	let { reload } = globalState.state;
	let { lang } = globalState.state;
	const { dispatch } = globalState;

	const [participantData, setParticipantData] = useState({
		yoga1: `${lang == "sr" ? "Prijavljeno" : "Applied"}: 0`,
		yoga2: `${lang == "sr" ? "Prijavljeno" : "Applied"}: 0`,
		yoga3: `${lang == "sr" ? "Prijavljeno" : "Applied"}: 0`,
		pilates1: `${lang == "sr" ? "Prijavljeno" : "Applied"}: 0`,
		pilates2: `${lang == "sr" ? "Prijavljeno" : "Applied"}: 0`,
		pilates3: `${lang == "sr" ? "Prijavljeno" : "Applied"}: 0`,
		core1: `${lang == "sr" ? "Prijavljeno" : "Applied"}: 0`,
		core2: `${lang == "sr" ? "Prijavljeno" : "Applied"}: 0`,
		core3: `${lang == "sr" ? "Prijavljeno" : "Applied"}: 0`,
		cardio1: `${lang == "sr" ? "Prijavljeno" : "Applied"}: 0`,
		cardio2: `${lang == "sr" ? "Prijavljeno" : "Applied"}: 0`,
		cardio3: `${lang == "sr" ? "Prijavljeno" : "Applied"}: 0`
	});

	const [reserveInfo, setReserveInfo] = useState({
		title: "",
		date: "",
		day: "",
		time: "",
		workoutID: ""
	});

	useEffect(() => {
		if (reserveInfo.title == "") return;
		document.getElementById("reserveModalButton").click();
	}, [reserveInfo]);

	useEffect(() => {
		const fetchWorkoutData = () => {
			let types = ["yoga", "pilates", "core", "cardio"];
			let myMap = {};

			let res = null;
			let processed = 0;
			types.forEach(async (type, index, types) => {
				for (let i = 0; i < 3; i++) {
					res = await axios.get(`/api/workouts/participants/${type}${i + 1}`);
					myMap[`${type}${i + 1}`] = `${
						lang == "sr" ? "Prijavljeno" : "Applied"
					}: ${res.data[0].participants}`;
				}
				processed++;

				// Wait for all of the async calls to finish before setting the state
				if (processed == types.length) {
					setParticipantData(myMap);
				}
			});
		};

		fetchWorkoutData();
	}, [reload]);

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

	const stringifyDate = (date) => {
		let day = String(date.getDate()).padStart(2, "0");
		let month = String(date.getMonth() + 1).padStart(2, "0");
		let year = date.getFullYear();

		let dayName = getDayName(day);

		return `${day}.${month}.${year}.`;
	};

	const getNewDate = (myDay) => {
		let offset = 0;
		let today = new Date();

		offset = (7 + myDay - today.getDay()) % 7;

		return new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate() + offset
		);
	};

	return (
		<Fragment>
			<input
				type="hidden"
				data-toggle="modal"
				data-target="#reserveModal"
				id="reserveModalButton"
			/>

			<div className="modal fade" tabIndex="-1" id="reserveModal" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="container-fluid">
							<div className="row modalHead centerRow justify-content-between">
								<span>
									{lang == "sr"
										? sr.table.reservationTitle
										: en.table.reservationTitle}
								</span>
								<img
									src={close}
									className="closeButton"
									data-toggle="modal"
									data-target="#reserveModal"
								/>
							</div>
							<div className="row modalBody">
								<span className="modalBodyTitle">{reserveInfo.title}</span>
								<span className="modalBodyDate">{`${getDayName(
									reserveInfo.day
								)}, ${reserveInfo.date}`}</span>
								<span className="modalBodyTime">{reserveInfo.time}</span>
							</div>
							<div className="row centerRowY justify-content-between modalBottom">
								<span className="formError" id="reserveError"></span>
								<button
									type="button"
									className="modalButton"
									onClick={async (e) => {
										e.preventDefault();
										const config = {
											headers: {
												"Content-Type": "application/json"
											}
										};

										const body = JSON.stringify({
											userID: user ? user._id : "",
											title: reserveInfo.title,
											date: reserveInfo.date,
											day: reserveInfo.day,
											time: reserveInfo.time
										});

										try {
											let res = await axios.post(
												"/api/users/newWorkout",
												body,
												config
											);

											res = await axios.get("/api/auth");

											dispatch({
												type: "LOAD_USER",
												payload: res.data
											});

											dispatch({
												type: "RELOAD",
												payload: ""
											});
											document.getElementById("reserveModalButton").click();
											document.getElementById("reserveError").innerHTML = "";
										} catch (err) {
											document.getElementById("reserveError").innerHTML =
												err.response.data.msg;
										}

										setTimeout(() => {
											document.getElementById("reserveError").innerHTML = "";
										}, 3000);
									}}
								>
									{lang == "sr" ? sr.table.submitButton : en.table.submitButton}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="table-responsive">
				<table className="table table-bordered">
					<thead className="thead-dark">
						<tr>
							<th scope="col">
								{lang == "sr" ? sr.table.time : en.table.time}
							</th>
							<th scope="col">
								{lang == "sr" ? sr.table.days.monday : en.table.days.monday}
							</th>
							<th scope="col">
								{lang == "sr" ? sr.table.days.tuesday : en.table.days.tuesday}
							</th>
							<th scope="col">
								{lang == "sr"
									? sr.table.days.wednesday
									: en.table.days.wednesday}
							</th>
							<th scope="col">
								{lang == "sr" ? sr.table.days.thursday : en.table.days.thursday}
							</th>
							<th scope="col">
								{lang == "sr" ? sr.table.days.friday : en.table.days.friday}
							</th>
							<th scope="col">
								{lang == "sr" ? sr.table.days.saturday : en.table.days.saturday}
							</th>
							<th scope="col">
								{lang == "sr" ? sr.table.days.sunday : en.table.days.sunday}
							</th>
						</tr>
					</thead>
					<tbody className="thead-dark">
						<tr id="17:00">
							<th scope="row">17:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td
								colSpan="1"
								rowSpan="2"
								className="pilates workoutScheduleItem"
								onClick={(e) => {
									let myDay = 6;

									let newDate = getNewDate(myDay);
									setReserveInfo({
										title: "Napredni nivo",
										date: stringifyDate(newDate),
										day: newDate.getDay(),
										time: "17:00 - 18:00"
									});
								}}
							>
								<span className="workoutTableName">Napredni nivo</span>
								<br />
								{participantData.pilates3}
							</td>
							<td></td>
						</tr>
						<tr id="17:30">
							<th scope="row">17:30</th>
							<td
								colSpan="1"
								rowSpan="2"
								className="pilates workoutScheduleItem"
								onClick={(e) => {
									let myDay = 1;

									let newDate = getNewDate(myDay);
									setReserveInfo({
										title: "Anatomske i ortopedske vežbe",
										date: stringifyDate(newDate),
										day: newDate.getDay(),
										time: "17:30 - 18:30"
									});
								}}
							>
								<span className="workoutTableName">
									Anatomske i ortopedske vežbe
								</span>
								<br />
								{participantData.pilates2}
							</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr id="18:00">
							<th scope="row">18:00</th>
							<td></td>
							<td
								colSpan="1"
								rowSpan="2"
								className="yoga workoutScheduleItem"
								onClick={(e) => {
									let myDay = 3;

									let newDate = getNewDate(myDay);
									setReserveInfo({
										title: "Upoznajte yogu",
										date: stringifyDate(newDate),
										day: newDate.getDay(),
										time: "18:00 - 19:00"
									});
								}}
							>
								<span className="workoutTableName">Upoznajte yogu</span>
								<br />
								{participantData.yoga1}
							</td>
							<td></td>
							<td
								colSpan="1"
								rowSpan="1"
								className="cardio workoutScheduleItem"
								onClick={(e) => {
									let myDay = 5;

									let newDate = getNewDate(myDay);
									setReserveInfo({
										title: "Kardio za mršavljenje",
										date: stringifyDate(newDate),
										day: newDate.getDay(),
										time: "18:00 - 18:30"
									});
								}}
							>
								<span className="workoutTableName">Kardio za mršavljenje</span>
								<br />
								{participantData.cardio1}
							</td>
							<td></td>
							<td></td>
						</tr>
						<tr id="18:30">
							<th scope="row">18:30</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr id="19:00">
							<th scope="row">19:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td
								colSpan="1"
								rowSpan="2"
								className="core workoutScheduleItem"
								onClick={(e) => {
									let myDay = 4;

									let newDate = getNewDate(myDay);
									setReserveInfo({
										title: "Core - Šta? Zašto? Kako?",
										date: stringifyDate(newDate),
										day: newDate.getDay(),
										time: "19:00 - 20:00"
									});
								}}
							>
								<span className="workoutTableName">
									Core - Šta? Zašto? Kako?
								</span>
								<br />
								{participantData.core2}
							</td>
							<td></td>
							<td></td>
							<td
								colSpan="1"
								rowSpan="1"
								className="cardio workoutScheduleItem"
								onClick={(e) => {
									let myDay = 0;

									let newDate = getNewDate(myDay);
									setReserveInfo({
										title: "Put do zabavnog kardio treninga",
										date: stringifyDate(newDate),
										day: newDate.getDay(),
										time: "19:00 - 19:30"
									});
								}}
							>
								<span className="workoutTableName">
									Put do zabavnog kardio treninga
								</span>
								<br />
								{participantData.cardio2}
							</td>
						</tr>
						<tr id="19:30">
							<th scope="row">19:30</th>
							<td></td>
							<td
								colSpan="1"
								rowSpan="1"
								className="core workoutScheduleItem"
								onClick={(e) => {
									let myDay = 2;

									let newDate = getNewDate(myDay);
									setReserveInfo({
										title: "HardCore",
										date: stringifyDate(newDate),
										day: newDate.getDay(),
										time: "19:30 - 20:00"
									});
								}}
							>
								<span className="workoutTableName">HardCore</span>
								<br />
								{participantData.core3}
							</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr id="20:00">
							<th scope="row">20:00</th>
							<td
								colSpan="1"
								rowSpan="1"
								className="yoga workoutScheduleItem"
								onClick={(e) => {
									let myDay = 1;

									let newDate = getNewDate(myDay);
									setReserveInfo({
										title: "Yoga za homofoteljuse",
										date: stringifyDate(newDate),
										day: newDate.getDay(),
										time: "20:00 - 20:30"
									});
								}}
							>
								<span className="workoutTableName">Yoga za homofoteljuse</span>{" "}
								<br />
								{participantData.yoga2}
							</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td
								colSpan="1"
								rowSpan="1"
								className="core workoutScheduleItem"
								onClick={(e) => {
									let myDay = 6;

									let newDate = getNewDate(myDay);
									setReserveInfo({
										title: "Učvrstite core, sačuvajte leđa",
										date: stringifyDate(newDate),
										day: newDate.getDay(),
										time: "20:00 - 20:30"
									});
								}}
							>
								<span className="workoutTableName">
									Učvrstite core, sačuvajte leđa
								</span>
								<br />
								{participantData.core1}
							</td>
							<td></td>
						</tr>
						<tr id="20:30">
							<th scope="row">20:30</th>
							<td></td>
							<td></td>
							<td
								colSpan="1"
								rowSpan="1"
								className="pilates workoutScheduleItem"
								onClick={(e) => {
									let myDay = 3;

									let newDate = getNewDate(myDay);
									setReserveInfo({
										title: "Vežbe na strunjači",
										date: stringifyDate(newDate),
										day: newDate.getDay(),
										time: "20:30 - 21:00"
									});
								}}
							>
								<span className="workoutTableName">Vežbe na strunjači</span>
								<br />
								{participantData.pilates1}
							</td>
							<td></td>
							<td
								colSpan="1"
								rowSpan="3"
								className="yoga workoutScheduleItem"
								onClick={(e) => {
									let myDay = 5;

									let newDate = getNewDate(myDay);
									setReserveInfo({
										title: "Yoga za powerliftere",
										date: stringifyDate(newDate),
										day: newDate.getDay(),
										time: "20:30 - 22:00"
									});
								}}
							>
								<span className="workoutTableName">Yoga za powerliftere</span>
								<br />
								{participantData.yoga3}
							</td>
							<td></td>
							<td></td>
						</tr>
						<tr id="21:00">
							<th scope="row">21:00</th>
							<td></td>
							<td
								colSpan="1"
								rowSpan="2"
								className="cardio workoutScheduleItem"
								onClick={(e) => {
									let myDay = 2;

									let newDate = getNewDate(myDay);
									setReserveInfo({
										title: "Kružni kardio trening",
										date: stringifyDate(newDate),
										day: newDate.getDay(),
										time: "21:00 - 22:00"
									});
								}}
							>
								<span className="workoutTableName">Kružni kardio trening</span>
								<br />
								{participantData.cardio3}
							</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr id="21:30">
							<th scope="row">21:30</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr id="22:00">
							<th scope="row">22:00</th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</Fragment>
	);
};

export default Table;
