import React, { useContext } from "react";
import blackClock from "../../assets/svg/clockBlack.svg";
import { store } from "../context/Store";

const SettingsFields = () => {
	const globalState = useContext(store);
	const { dispatch } = globalState;

	const { user } = globalState.state;

	let re = /(.*)-(.*)-(.*)T/gm;
	let resArray = re.exec(user ? user.date : "");

	let year = resArray[1];
	let month = resArray[2];
	let day = resArray[3];

	return (
		<div className="container-fluid aboutContainer centerRowX">
			<div className="row d-flex centerRowX">
				<div clasName="col-lg-4 d-flex justify-content-center">
					{/*col-xs-12 col-sm-6 */}
					<div className="row d-flex centerRowX settingsMargin">
						<div className="col-12 d-flex justify-content-center mr-3">
							<img
								src={`${user ? user.avatar : ""}`}
								className="profilePic"
								alt="Image error!"
							/>
						</div>
					</div>
					<div className="row d-flex centerRowX settingsMargin">
						<div className="col-12 d-flex justify-content-center">
							<img src={blackClock} className="clockIcon" alt="Image error!" />

							<span>
								Korisnik od:{" "}
								{`${user ? day + "." + month + "." + year + "." : ""}`}
							</span>
						</div>
					</div>
				</div>
				<div clasName="col-lg-8 d-flex justify-content-center">
					{/*col-xs-12 col-sm-6 */}
					<form className="settingsForm ml-5">
						<div className="row d-flex centerRowX settingsMargin justify-content-start">
							<div clasName="col-xs-12 col-sm-5 col-lg-3">
								<label for="imeS">Ime</label>
								<input
									type="text"
									className="form-control"
									id="imeS"
									value={`${user.firstName}`}
								/>
							</div>
							<div clasName="col-xs-12 offset-sm-1 col-sm-6 offset-lg-1 col-lg-3">
								<label for="prezimeS">Prezime</label>
								<input
									type="text"
									className="form-control"
									id="prezime"
									value={`${user.lastName}`}
								/>
							</div>
							<div clasName="col-xs-12 col-sm-12 offset-lg-1 col-lg-4">
								<label for="mailS">E-mail</label>
								<input
									type="text"
									className="form-control"
									id="mailS"
									value={`${user.email}`}
								/>
							</div>
						</div>
						<div className="row d-flex centerRowX settingsMargin justify-content-start">
							<div clasName="col-xs-12 col-sm-5 offset-lg-1 col-lg-4">
								<label for="lozinkaS">Lozinka (min.6 karaktera)</label>
								<input
									type="password"
									className="form-control minContactForm"
									id="lozinkaS"
								/>
							</div>
							<div clasName="col-xs-12 offset-sm-1 col-sm-6 offset-lg-1 col-lg-4">
								<label for="lozinkaSPot">Potvrda lozinke</label>
								<input
									type="password"
									className="form-control minContactForm"
									id="lozinkaSPot"
								/>
							</div>
						</div>
						<div className="row d-flex centerRowX settingsMargin buttonsRow">
							<div clasName="col-xs-5 col-sm-4 col-lg-2">
								<button
									type="button"
									className="modalButton"
									data-dismiss="modal"
									id="deleteButton"
								>
									Ugasi nalog
								</button>
							</div>
							<div clasName="offset-xs-1 col-xs-5 offset-sm-2 col-sm-4  offset-lg-3 col-lg-2">
								<button
									type="button"
									className="modalButton ml-3"
									data-dismiss="modal"
									id="saveButton"
								>
									Sačuvaj
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SettingsFields;
