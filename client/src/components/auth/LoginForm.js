import React from "react";

const LoginForm = () => {
	return (
		<div class="logForm">
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#loginModal"
			>
				Prijavi se
			</button>

			<div
				className="modal fade"
				tabindex="-1"
				id="loginModal"
				role="dialog"
			>
				<form className="loginForm d-flex justify-content-center">
					<div
						className="modal-dialog justify-content-center"
						role="document"
					>
						<div className="modal-content">
							<div className="row modalHead centerRow loginRow justify-content-center">
								PRIJAVA
							</div>
							<div className="row modalBody loginRow justify-content-left">
								<label for="mail">E-mail</label>
								<input
									type="text"
									className="form-control"
									id="mail"
								/>
								<label for="pswd mt-5">Lozinka</label>
								<input
									type="text"
									className="form-control"
									id="pswd"
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
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
