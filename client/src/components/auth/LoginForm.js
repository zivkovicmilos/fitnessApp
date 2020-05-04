import React from "react";

const LoginForm = () => {
	return (
		<div class="loginForm">
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#exampleModal"
			>
				Prijavi se
			</button>

			<div
				className="modal fade"
				tabindex="-1"
				id="exampleModal"
				role="dialog"
			>
				<form className="loginForm">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="container justify-content-center">
								<div className="row modalHead centerRow loginRow justify-content-center">
									PRIJAVA
								</div>
								<div className="row modalBody loginRow justify-content-left">
									<label for="imePrezime">E-mail</label>
									<input
										type="text"
										className="form-control minContactForm"
										id="imePrezime"
									/>
									<label for="eMail mt-5">Lozinka</label>
									<input
										type="text"
										className="form-control minContactForm"
										id="eMail"
									/>
								</div>
								<div className="row modalBottom loginRow justify-content-right">
									<button
										type="button"
										className="modalButton"
										data-dismiss="modal"
									>
										Prijava
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

export default LoginForm;
