import React, { Fragment } from "react";
import ServicesForm from "./ServicesForm";

const InfoSectionContent = (props) => {
	if (props.section == "infoTreninzi") {
		return (
			<Fragment>
				<div className="row centerRow">
					<h2 className="col-md-10 col-10">Zašto trenirati?</h2>
					<span className="sectionText col-md-10 col-10">
						Čovekovo telo dizajnirano je da izdrži sve što majka
						priroda može da baci na njega. U današnjem vremenu
						uticaj prirode je slabiji nego ikada pa moderni čovek
						nema potrebe da koristi ni polovinu svojih fizičkih
						mogućnosti. Ovo dovodi do brojnih fizičkih i psihičkih
						problema kod čoveka. Jedino treningom čovek može da
						stimuliše svoje telo tako da se oseća najbolje moguće u
						svojoj koži.
					</span>
				</div>
				<div className="row centerRow mt-5">
					<h2 className="col-md-10 col-10 text-right">
						Početak stvaranja zdravih navika{" "}
					</h2>
					<span className="sectionText col-md-10 col-10">
						Većini ljudi je trening najčešće u suprotnosti sa
						njihovim trenutnim životnim navikama. Kao i sa ostalim
						navikama, promene mogu biti veoma teške, ali se uvek
						rešavaju na isti način, odlučnošću i istrajnošću. Put od
						hiljadu koraka poćinje jednim korakom, napravite ga
						zajedno sa nama.
					</span>
				</div>
			</Fragment>
		);
	} else if (props.section == "infoNutricionista") {
		return (
			<Fragment>
				<div className="row centerRow">
					<h2 className="col-md-10 col-10">Ishrana</h2>
					<span className="sectionText col-md-10 col-10">
						Iako deluje veoma jednostavno , većina ljudi nema pravu
						predstavu kada je hrana u pitanju. Jedna od čestih
						zabluda koja se javlja je "Živim da bih jeo" način
						života. U svetu marketinga i fensi restorana lako je
						izgubiti pravi put i voditi se svojim čulima a ne
						zdravljem. Naš nutricionista pruža vam odgovore na vaša
						glavna pitanja - šta, kako i kada jesti?
					</span>
				</div>
				<div className="row centerRow">
					<ServicesForm section={props.section} />
				</div>
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<div className="row centerRow">
					<h2 className="col-md-10 col-10">Masaža</h2>
					<span className="sectionText col-md-10 col-10">
						Smatra se da je masaža jedna od najpoznatijih metoda za
						lečenje i opuštanje organizma. Ona igra glavnu ulogu
						kada je u pitanju naše zdravlje. Masaža otklanja
						napetost koja je stvorena u nervima ljudskog organizma.
						Nakon tretmana nervni sistem se oslobađa tenzije i vraća
						se u normalno stanje. Osim na nerve, masaža utiče
						pozitivno i na mišiće, poboljšava cirkulaciju, razmenu
						hranljivih materija, sprečava pojavu bora i strija,
						povećava elastičnost, a odlična je i kod gubitka
						kilograma i pri eliminaciji tečnosti i toksina iz tela.
					</span>
				</div>
				<div className="row centerRow">
					<ServicesForm section={props.section} />
				</div>
			</Fragment>
		);
	}
};

export default InfoSectionContent;
