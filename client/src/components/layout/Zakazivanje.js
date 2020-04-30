import React from "react";
import Table from "./Zakazivanje/Table";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Footer from "./Footer";

const Zakazivanje = () => {
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
			<div className="row">
				<h1 className="pageTitle">NEDELJNI KALENDAR</h1>
			</div>
			<div className="row">
				<div className="col-md-3">
					<div className="filters">
						<h3>FILTERI</h3>
						<form>
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="yoga"
								/>
								<label className="form-check-label" for="yoga">
									Yoga
								</label>
							</div>
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="pilates"
								/>
								<label
									className="form-check-label"
									for="pilates"
								>
									Pilates
								</label>
							</div>
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="core"
								/>
								<label className="form-check-label" for="core">
									Core
								</label>
							</div>
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="cardio"
								/>
								<label
									className="form-check-label"
									for="cardio"
								>
									Cardio
								</label>
							</div>
						</form>
					</div>
				</div>
				<div className="col">
					<Table />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Zakazivanje;
