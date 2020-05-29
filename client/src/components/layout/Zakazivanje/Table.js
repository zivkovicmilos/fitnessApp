import React, { Fragment, useEffect, useState } from "react";
import close from "./../../../assets/svg/close.svg";
import axios from "axios";

const Table = () => {
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
								<span>REZERVACIJA</span>
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
								{
									//<span className="modalBodyNum">{reserveInfo.num}</span>
								}
							</div>
							<div className="row modalBottom">
								<button
									type="button"
									className="modalButton"
									//data-dismiss="modal"
									onClick={async (e) => {
										e.preventDefault();
										const config = {
											headers: {
												"Content-Type": "application/json"
											}
										};

										const body = JSON.stringify({
											userID: "5ed11fe7dac0740ef8bea8eb", // TODO change to token
											title: reserveInfo.title,
											date: reserveInfo.date,
											day: reserveInfo.day,
											time: reserveInfo.time
										});

										try {
											let res = await axios.post(
												"api/users/newWorkout",
												body,
												config
											);
										} catch (err) {
											console.log(err);
										}

										document.getElementById("reserveModalButton").click();
									}}
								>
									Potvrdi
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
							<th scope="col">Vreme</th>
							<th scope="col">Ponedeljak</th>
							<th scope="col">Utorak</th>
							<th scope="col">Sreda</th>
							<th scope="col">Četvrtak</th>
							<th scope="col">Petak</th>
							<th scope="col">Subota</th>
							<th scope="col">Nedelja</th>
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
								Prijavljeno: 5
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
								Prijavljeno: 5
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
								Prijavljeno: 5
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
								Prijavljeno: 5
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
								Prijavljeno: 5
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
								Prijavljeno: 5
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
								Prijavljeno: 5
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
								Prijavljeno: 5
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
								Prijavljeno: 5
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
								Prijavljeno: 5
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
								Prijavljeno: 5
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
								Prijavljeno: 5
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
