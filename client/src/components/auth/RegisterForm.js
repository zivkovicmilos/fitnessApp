import React from "react";

const RegistterForm = () => {
	return (
		<div class="regForm">
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#registrationModal"
			>
				REGISTRACIJA
			</button>

			<div
				className="modal fade"
				tabindex="-1"
				id="registrationModal"
				role="dialog"
			>
				<form className="registrationForm d-flex justify-content-center">
					<div
						className="modal-dialog  justify-content-center"
						role="document"
					>
						<div className="modal-content">
							<div className="container justify-content-center">
								<div className="row modalHead centerRow regRow justify-content-center">
									Registracija
								</div>
								<div className="row d-flex regRow justify-content-start">
									<div className="col-sm-12 col-lg-5 imeRCol mb-2">
										<label for="imeR">Ime</label>
										<input
											type="text"
											className="form-control"
											id="imeR"
										/>
									</div>
									<div className="col-sm-12 offset-lg-1 col-lg-6 prezimeRCol mb-2">
										<label for="prezimeR">Prezime</label>
										<input
											type="text"
											className="form-control"
											id="prezimeR"
										/>
									</div>
								</div>
								<div className="row modalBody regRow justify-content-start">
									<label for="mailR">E-mail</label>
									<input
										type="text"
										className="form-control mb-2"
										id="mailR"
									/>
									<label for="pswdR mt-5">Lozinka</label>
									<input
										type="text"
										className="form-control mb-2"
										id="pswdR"
									/>
									<label for="pswdRP mt-5">Lozinka</label>
									<input
										type="text"
										className="form-control mb-2"
										id="pswdRP"
									/>
								</div>
								<div className="row modalBottom regRow justify-content-right">
									<button
										type="button"
										className="modalButton"
										data-dismiss="modal"
									>
										Registracija
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegistterForm;
