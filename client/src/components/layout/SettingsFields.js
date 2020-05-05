import React from "react";
import profile from "../../assets/img/profile.jpeg";
import clock from "../../assets/svg/about/clock.svg";

const SettingsFields = () => {
	return (
		<div className="container-fluid aboutContainer centerRowX">
			<div className="row d-flex centerRowX">
				<div clasName="col-lg-4 d-flex justify-content-center">
					{/*col-xs-12 col-sm-6 */}
					<div className="row d-flex centerRowX settingsMargin">
						<div className="col-12 d-flex justify-content-center">
							<img
								src={profile}
								className="profilePic"
								alt="Image error!"
							/>
						</div>
					</div>
					<div className="row d-flex centerRowX settingsMargin">
						<div className="col-12 d-flex justify-content-center">
							<img
								src={clock}
								className="clockIcon"
								alt="Image error!"
							/>
							<span>Korisnik od: 18:04:2020</span>
						</div>
					</div>
				</div>
				<div clasName="col-lg-8 d-flex justify-content-center">
					{/*col-xs-12 col-sm-6 */}
					<form className="settingsForm">
						<div className="row d-flex centerRowX settingsMargin justify-content-start">
							<div clasName="col-xs-12 col-sm-5 col-lg-3">
								<label for="imeS">Ime</label>
								<input
									type="text"
									className="form-control"
									id="imeS"
								/>
							</div>
							<div clasName="col-xs-12 offset-sm-1 col-sm-6 offset-lg-1 col-lg-3">
								<label for="prezimeS">Prezime</label>
								<input
									type="text"
									className="form-control"
									id="prezime"
								/>
							</div>
							<div clasName="col-xs-12 col-sm-12 offset-lg-1 col-lg-4">
								<label for="mailS">E-mail</label>
								<input
									type="text"
									className="form-control"
									id="mailS"
								/>
							</div>
						</div>
						<div className="row d-flex centerRowX settingsMargin justify-content-start">
							<div clasName="col-xs-12 col-sm-5 offset-lg-1 col-lg-4">
								<label for="lozinkaS">
									Lozinka (min.6 karaktera)
								</label>
								<input
									type="text"
									className="form-control minContactForm"
									id="lozinkaS"
								/>
							</div>
							<div clasName="col-xs-12 offset-sm-1 col-sm-6 offset-lg-1 col-lg-4">
								<label for="lozinkaSPot">Potvrda lozinke</label>
								<input
									type="text"
									className="form-control minContactForm"
									id="lozinkaSPot"
								/>
							</div>
						</div>
						<div className="row d-flex centerRowX settingsMargin justify-content-around  buttonsRow">
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
									className="modalButton"
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
