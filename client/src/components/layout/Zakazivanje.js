import React, { useState } from "react";
import Table from "./Zakazivanje/Table";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Footer from "./Footer";

const Zakazivanje = () => {
	const [yoga, setYoga] = useState(true);
	const [pilates, setPilates] = useState(true);
	const [core, setCore] = useState(true);
	const [cardio, setCardio] = useState(true);

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
					className="pageTitle col-md-12 offset-md-1 offset-1 col 
				"
				>
					NEDELJNI KALENDAR
				</h1>
			</div>
			<div className="row centerRowX">
				<div className="col-xs-3">
					<div className="filters">
						<h3>FILTERI</h3>
						<form>
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="yoga"
									defaultChecked={yoga}
									onChange={() => {
										setYoga(!yoga);
									}}
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
									defaultChecked={pilates}
									onChange={() => {
										setPilates(!pilates);
									}}
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
									defaultChecked={core}
									onChange={() => {
										setCore(!core);
									}}
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
									defaultChecked={cardio}
									onChange={() => {
										setCardio(!cardio);
									}}
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
				<div className="col-md-auto col-xs-12">
					<Table />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Zakazivanje;
