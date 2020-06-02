import React, { useContext, useEffect } from "react";
import blackClock from "../../assets/svg/clockBlack.svg";
import { store } from "../context/Store";
import { Formik } from "formik";
import * as Yup from "yup";
import FormError from "./Forms/FormError";
import axios from "axios";
import Loading from "./Loading";

const validationSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(3, "Prekratko ime")
		.max(255, "Ime predugačko")
		.required("Ime je obavezno"),
	lastName: Yup.string()
		.min(3, "Prekratko prezime")
		.max(255, "Prezime predugačko")
		.required("Prezime je obavezno"),
	password: Yup.string().min(6, "Prekratka šifra"),
	passwordConfirm: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"Šifre se moraju poklapati"
	)
});

const SettingsFields = () => {
	const globalState = useContext(store);
	const { dispatch } = globalState;

	const { user } = globalState.state;

	let year = "";
	let month = "";
	let day = "";

	try {
		let re = /(.*)-(.*)-(.*)T/;
		let resArray = re.exec(user ? user.date : "");

		year = resArray[1];
		month = resArray[2];
		day = resArray[3];
	} catch (err) {}

	if (
		!globalState.state.isAuthenticated ||
		globalState.state.isLoading ||
		!user
	) {
		// User is not logged in, display dummy
		return <div></div>;
	} else {
		return (
			<div className="container-fluid aboutContainer centerRowX">
				<div className="row centerRow">
					<div className="col-lg-3 justify-content-center">
						<div className="row text-center settingsMargin">
							<div className="col-12 mr-3">
								<img
									src={`${user ? user.avatar : ""}`}
									className="settingsProfPic"
									alt="Image error!"
								/>
							</div>
						</div>
						<div className="row text-center">
							<div className="col-12">
								<img
									src={blackClock}
									className="clockIcon"
									alt="Image error!"
								/>

								<span>
									Korisnik od:{" "}
									{`${user ? day + "." + month + "." + year + "." : ""}`}
								</span>
							</div>
						</div>
					</div>
					<div className="col-lg-8 justify-content-center">
						<Formik
							initialValues={{
								firstName: user ? user.firstName : "",
								lastName: user ? user.lastName : "",
								email: user ? user.email : "",
								password: "",
								passwordConfirm: ""
							}}
							validationSchema={validationSchema}
						>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting
							}) => (
								<form
									className="settingsForm ml-5"
									onSubmit={async (e) => {
										e.preventDefault();

										dispatch({
											type: "SETLOADING",
											payload: {}
										});

										dispatch({
											type: "LOGOUT",
											payload: {}
										});

										const config = {
											headers: {
												"Content-Type": "application/json"
											}
										};

										const body = JSON.stringify({
											firstName: values.firstName,
											lastName: values.lastName,
											email: values.email,
											password: values.password
										});

										try {
											let res = await axios.post(
												"/api/users/update",
												body,
												config
											);

											// res.data as payload
											dispatch({
												type: "LOGIN",
												payload: {
													token: res.data.token
												}
											});

											if (localStorage.getItem("token") != null) {
												axios.defaults.headers.common[
													"x-auth-token"
												] = `${localStorage
													.getItem("token")
													.replace(/"/g, "")}`;
											} else {
												axios.defaults.headers.common["x-auth-token"] = null;
											}

											res = await axios.get("/api/auth");

											dispatch({
												type: "LOAD_USER",
												payload: res.data
											});
										} catch (err) {
											console.log(err);
											dispatch({
												type: "LOGOUT",
												payload: {}
											});
										}

										dispatch({
											type: "SETLOADING",
											payload: {}
										});
									}}
								>
									<div className="row mb-2">
										<div className="col-xs-12 col-sm-5 col-lg-3">
											<div className="form-group mb-0">
												<label htmlFor="firstName">Ime</label>
												<div className="invalid-group">
													<input
														type="text"
														id="firstName"
														name="firstName"
														className={`form-control mr-0 ${
															touched.firstName && errors.firstName
																? "is-invalid"
																: null
														} ${
															touched.firstName && !errors.firstName
																? "is-valid"
																: null
														}`}
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.firstName}
													/>
													<FormError
														touched={touched.firstName}
														message={errors.firstName}
													/>
												</div>
											</div>
										</div>
										<div className="col-xs-12 col-sm-6 col-lg-3">
											<div className="form-group mb-0">
												<label htmlFor="lastName">Prezime</label>
												<div className="invalid-group">
													<input
														type="text"
														className={`form-control ${
															touched.lastName && errors.lastName
																? "is-invalid"
																: null
														} ${
															touched.lastName && !errors.lastName
																? "is-valid"
																: null
														}`}
														id="lastName"
														name="lastName"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.lastName}
													/>
													<FormError
														touched={touched.lastName}
														message={errors.lastName}
													/>
												</div>
											</div>
										</div>
										<div className="col-xs-12 col-sm-12 col-lg-4">
											<label htmlFor="email">E-mail</label>
											<input
												type="text"
												className="form-control disabledBtn"
												id="email"
												name="email"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.email}
											/>
										</div>
									</div>
									<div className="row">
										<div className="col-xs-12 col-sm-5 col-lg-4">
											<div className="form-group mb-0">
												<label htmlFor="password">
													Lozinka (min.6 karaktera)
												</label>
												<div className="invalid-group">
													<input
														type="password"
														className={`form-control ${
															touched.password && errors.password
																? "is-invalid"
																: null
														} ${
															touched.password && !errors.password
																? "is-valid"
																: null
														}`}
														id="password"
														name="password"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.password}
													/>
													<FormError
														touched={touched.password}
														message={errors.password}
													/>
												</div>
											</div>
										</div>
										<div className="col-xs-12 col-sm-6 col-lg-4">
											<div className="form-group mb-0">
												<label htmlFor="passwordConfirm">Potvrda lozinke</label>
												<div className="invalid-group">
													<input
														type="password"
														className={`form-control ${
															touched.passwordConfirm && errors.passwordConfirm
																? "is-invalid"
																: null
														} ${
															touched.passwordConfirm && !errors.passwordConfirm
																? "is-valid"
																: null
														}`}
														id="passwordConfirm"
														name="passwordConfirm"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.passwordConfirm}
													/>
													<FormError
														touched={touched.passwordConfirm}
														message={errors.passwordConfirm}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="row mt-5 centerRow">
										<div className="centerRow">
											<button
												type="button"
												className="modalButton"
												data-dismiss="modal"
												id="deleteButton"
												onClick={async (e) => {
													e.preventDefault();

													dispatch({
														type: "SETLOADING",
														payload: {}
													});

													const config = {
														headers: {
															"Content-Type": "application/json"
														}
													};

													const body = JSON.stringify({
														userID: user._id
													});

													try {
														let res = await axios.post(
															"/api/users/delete",
															body,
															config
														);

														dispatch({
															type: "LOGOUT",
															payload: {}
														});
													} catch (err) {
														console.log(err);
														dispatch({
															type: "LOGOUT",
															payload: {}
														});
													}

													dispatch({
														type: "SETLOADING",
														payload: {}
													});
												}}
											>
												Ugasi nalog
											</button>
										</div>
										<div className="centerRow">
											<button
												type="submit"
												className="modalButton ml-3"
												disabled={isSubmitting}
												id="saveButton"
											>
												Sačuvaj
											</button>
										</div>
									</div>
								</form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		);
	}
};

export default SettingsFields;
