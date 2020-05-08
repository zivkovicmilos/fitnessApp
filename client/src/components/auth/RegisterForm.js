import React, { Fragment, useContext, useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import FormError from "./../layout/Forms/FormError";
import { store } from "../context/Store";
import axios from "axios";

const validationSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(3, "Prekratko ime")
		.max(255, "Ime predugačko")
		.required("Ime je obavezno"),
	lastName: Yup.string()
		.min(3, "Prekratko prezime")
		.max(255, "Prezime predugačko")
		.required("Prezime je obavezno"),
	email: Yup.string()
		.email("Nevalidan mejl")
		.min(3, "Prekratak mejl")
		.max(50, "Predugačak mejl")
		.required("Mejl je obavezan"),
	password: Yup.string()
		.min(6, "Prekratka šifra")
		.required("Šifra je obavezna"),
	passwordConfirm: Yup.string()
		.oneOf([Yup.ref("password"), null], "Šifre se moraju poklapati")
		.required("Šifra je obavezna")
});

const RegistterForm = (props) => {
	const globalState = useContext(store);
	const { dispatch } = globalState;

	let userEmail = props.email;

	useEffect(() => {
		userEmail = props.email;
		console.log("Getting " + userEmail);
	}, [props.email]);

	return (
		<Fragment>
			<div
				className="modal fade"
				tabindex="-1"
				id="registrationModal"
				role="dialog"
			>
				<Formik
					initialValues={{
						firstName: "",
						lastName: "",
						email: userEmail,
						password: "",
						passwordConfirm: ""
					}}
					enableReinitialize={true}
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
							className="registrationForm d-flex justify-content-center"
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
									let res = await axios.post("api/users", body, config);

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
										] = `${localStorage.getItem("token").replace(/"/g, "")}`;
									} else {
										axios.defaults.headers.common["x-auth-token"] = null;
									}
									res = await axios.get("api/auth");

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

								document.getElementById("registerButton").click();
								dispatch({
									type: "SETLOADING",
									payload: {}
								});
							}}
						>
							<div
								className="modal-dialog  justify-content-center"
								role="document"
							>
								<div className="modal-content">
									<div className="row modalHead centerRow formRow justify-content-center">
										REGISTRACIJA
									</div>
									<div className="modalBody">
										<div className="form-row formRow">
											<div className="col-sm-12 col-lg-6 mb-2">
												<div className="form-group">
													<label htmlFor="firstName">Ime</label>
													<div className="invalid-group">
														<input
															type="text"
															className={`form-control ${
																touched.firstName && errors.firstName
																	? "is-invalid"
																	: null
															} ${
																touched.firstName && !errors.firstName
																	? "is-valid"
																	: null
															}`}
															id="firstName"
															name="firstName"
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
											<div className="col-sm-12 col-lg-6">
												<div className="form-group">
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
										</div>
										<div className="form-row formRow">
											<div className="form-group col">
												<label htmlFor="email">E-mail</label>

												<div className="invalid-group">
													<input
														type="text"
														className={`form-control ${
															touched.email && errors.email
																? "is-invalid"
																: null
														} ${
															touched.email && !errors.email ? "is-valid" : null
														}`}
														id="email"
														name="email"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.email}
													/>
													<FormError
														touched={touched.email}
														message={errors.email}
													/>
												</div>
											</div>
										</div>
										<div className="form-row formRow">
											<div className="form-group col">
												<label htmlFor="password mt-5">
													Lozinka{" "}
													<span className="labelMin">(min. 6 karaktera)</span>
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
										<div className="form-row formRow">
											<div className="form-group col">
												<label htmlFor="passwordConfirm mt-5">
													Potvrda lozinke
												</label>
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
									<div className="text-right">
										<button
											type="submit"
											className="modalButton modalButtonFix"
											disabled={isSubmitting}
										>
											Registracija
										</button>
									</div>
								</div>
							</div>
						</form>
					)}
				</Formik>
			</div>
		</Fragment>
	);
};

export default RegistterForm;
