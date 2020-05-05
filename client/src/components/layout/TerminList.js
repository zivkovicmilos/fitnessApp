import React from "react";
import TerminListItem from "./TerminListItem";
import TrainingPic from "../../assets/img/workouts/core/core1.jpg";

const TerminList = () => {
	return (
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
	);
};

export default TerminList;
