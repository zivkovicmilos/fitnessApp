import React from "react";
import Trophy from "./Trophy";
import fitPass from "../../assets/img/fitPass.png";
import nwcm from "../../assets/img/nwcm.jpg";
import goty from "../../assets/img/goty.png";
import mmbrCard from "../../assets/img/mmbrCard.jpg";
import nutrition from "../../assets/img/nutrition.jpg";
import charity from "../../assets/img/charity.png";

const Trophies = (props) => {
	return (
		<div class="container-fluid aboutContainer">
			<h1 className="pageTitle">OSVOJILI SMO,</h1>
			<br />
			<div class="row centerRowX">
				<div class="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-center">
					<Trophy
						image={nwcm}
						title="Newcomer of the Year - 2017"
						text="U godini otvaranja, sada vec davne 2017. godine, zahvaljujuci svom brzom rastu i razvoju, fitnes centar 4ricepsFitness osvojio je pocasnu nagradu Newcomer of the Year kao najbolji novootvoreni fitnes centar. "
					/>
				</div>
				<div class="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-center">
					<Trophy
						image={goty}
						title="Gym team of the year"
						text="Uz pazljivo odabran kadar ljudi koji svojim trudom i radom pomazu klijentima da efikasno dostignu svoje ciljeve, naš fitnes centar dobio je 2018. godine nagradu za najbolji kolektiv u teretanama i fitnes centrima."
					/>
				</div>
				<div class="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-center">
					<Trophy
						image={mmbrCard}
						title="Member Achievement Award"
						text="Tokom 2018. godine 4ricepsFitness je zabelezio svog rekordnog 10.000-og clana."
					/>
				</div>
				<div class="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-center">
					<Trophy
						image={fitPass}
						title="FitPass Awards Night 2019 - Fitnes centar godine"
						text="Na FitPass Awards Night 2019 dodeli nagrada 4ricepsFitness osvojio je pocasnu nagradu Fitnes centra godine."
					/>
				</div>
				<div class="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-center">
					<Trophy
						image={nutrition}
						title="Innovation in Fitness Nutrition"
						text="Pocasni smo nosioci ove nagrade za 2019. godinu koju smo dobili adekvatnim kombinovanjem nasih usluga radi postizanja rezultata na najefikasniji moguci nacin."
					/>
				</div>

				<div class="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-center">
					<Trophy
						image={charity}
						title="Best Charitable Initiative"
						text="Trenutno smo nominovani na The Charity Awards 2020 nagradnom programu zbog ucestvovanja u borbi protiv COVID-19 virusa. U periodu vanrednog stanja, nasi radnici su dobrovoljno vrsili dezinfekciju gradova, snabdevanje starijih lica i distribucija zastitne opreme."
					/>
				</div>
			</div>
		</div>
	);
};

export default Trophies;
