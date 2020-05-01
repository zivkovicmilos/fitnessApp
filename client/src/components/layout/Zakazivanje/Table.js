import React, { Fragment, useEffect } from "react";

const Table = () => {
	return (
		<Fragment>
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#exampleModal"
			>
				Launch demo modal
			</button>

			<div
				className="modal fade"
				tabindex="-1"
				id="exampleModal"
				role="dialog"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="container-fluid">
							<div className="row modalHead centerRow">
								REZERVACIJA
							</div>
							<div className="row modalBody">
								<span className="modalBodyTitle">
									Grupni Pilates trening
								</span>
								<span className="modalBodyDate">
									Utorak, 21.04.2020.
								</span>
								<span className="modalBodyTime">
									14:30 - 15:00
								</span>
								<span className="modalBodyNum">
									Broj učesnika: 15
								</span>
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

			<table className="table table-bordered">
				<thead>
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
				<tbody>
					<tr>
						<th scope="row">17:00</th>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
					</tr>
					<tr>
						<th scope="row">17:30</th>
						<td colSpan="1" rowSpan="2" className="pilates">
							<span>Grupni Pilates trening</span>
						</td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
					</tr>
					<tr>
						<th scope="row">18:00</th>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
					</tr>
					<tr>
						<th scope="row">18:30</th>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
					</tr>
					<tr>
						<th scope="row">19:00</th>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
					</tr>
					<tr>
						<th scope="row">19:30</th>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
					</tr>
					<tr>
						<th scope="row">20:00</th>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
					</tr>
					<tr>
						<th scope="row">20:30</th>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
					</tr>
					<tr>
						<th scope="row">21:00</th>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
					</tr>
					<tr>
						<th scope="row">21:30</th>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
					</tr>
					<tr>
						<th scope="row">22:00</th>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
						<td colSpan="1" rowSpan="1"></td>
					</tr>
				</tbody>
			</table>
		</Fragment>
	);
};

export default Table;
