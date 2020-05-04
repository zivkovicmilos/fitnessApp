import React from "react";
import Sad from "../../assets/svg/sad.svg";
import TerminListItem from "./TerminListItem";
import TrainingPic from "../../assets/img/workouts/core/core1.jpg";

const Termini = () => {
	let brZak = 1;
	return (
		<div className="container-fluid centerRowX termini">
			<div className="row">
				<div className="col-12 mb-4">
					<h1 className="pageTitle">Moji termini, </h1>
				</div>
			</div>
			<div className="row">
				{brZak && (
					<div className="container-fluid">
						<TerminListItem
							title="Kardio za mršavljenje"
							subtitle="Utorak 21.04.202 * 14:30 - 15:30"
							text=" Dopustite da vam promenimo pogled i pokazemo kako odraditi kardio od koga ćete zapravo imati rezultate."
							image={TrainingPic}
						/>
						<TerminListItem
							title="Ovo je naslov"
							text="Ovo je neki tekst koji je opis treninga"
							image={TrainingPic}
						/>
						<TerminListItem
							title="Ovo je naslov"
							text="Ovo je neki tekst koji je opis treninga"
							image={TrainingPic}
						/>
						<TerminListItem
							title="Ovo je naslov"
							text="Ovo je neki tekst koji je opis treninga"
							image={TrainingPic}
						/>
					</div>
				)}
			</div>
			<div className="row">
				{!brZak && (
					<div className="col-12 sad">
						<img src={Sad}></img>
					</div>
				)}
				{!brZak && (
					<div className="col-12 sad">
						<h2>Nemate zakazane termine</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default Termini;
