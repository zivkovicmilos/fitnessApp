import React, { Fragment, useEffect } from "react";
import close from "./../../../assets/svg/close.svg";

const Table = () => {
	return (
		<Fragment>
			{/*
			
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#reserveModal"
			>
				Launch demo modal
			</button>
			*/}
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
								<span className="modalBodyTitle">Grupni Pilates trening</span>
								<span className="modalBodyDate">Utorak, 21.04.2020.</span>
								<span className="modalBodyTime">14:30 - 15:00</span>
								<span className="modalBodyNum">Broj učesnika: 15</span>
							</div>
							<div className="row modalBottom">
								<button
									type="button"
									className="modalButton"
									data-dismiss="modal"
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
							>
								Napredni nivo
							</td>
							<td></td>
						</tr>
						<tr id="17:30">
							<th scope="row">17:30</th>
							<td
								colSpan="1"
								rowSpan="2"
								className="pilates workoutScheduleItem"
							>
								Anatomske i ortopedske vežbe
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
							<td colSpan="1" rowSpan="2" className="yoga workoutScheduleItem">
								Upoznajte yogu
							</td>
							<td></td>
							<td
								colSpan="1"
								rowSpan="1"
								className="cardio workoutScheduleItem"
							>
								Kardio za mršavljenje
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
							<td colSpan="1" rowSpan="2" className="core workoutScheduleItem">
								Core - Šta? Zašto? Kako?
							</td>
							<td></td>
							<td></td>
							<td
								colSpan="1"
								rowSpan="1"
								className="cardio workoutScheduleItem"
							>
								Put do zabavnog kardio treninga
							</td>
						</tr>
						<tr id="19:30">
							<th scope="row">19:30</th>
							<td></td>
							<td colSpan="1" rowSpan="1" className="core workoutScheduleItem">
								HardCore
							</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr id="20:00">
							<th scope="row">20:00</th>
							<td colSpan="1" rowSpan="1" className="yoga workoutScheduleItem">
								Yoga za homofoteljuse
							</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td colSpan="1" rowSpan="1" className="core workoutScheduleItem">
								Učvrstite core, sačuvajte leđa
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
							>
								Vežbe na strunjači
							</td>
							<td></td>
							<td colSpan="1" rowSpan="3" className="yoga workoutScheduleItem">
								Yoga za powerliftere
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
							>
								Kružni kardio trening
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
