import React, { Fragment, useContext, useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import FormError from "./../layout/Forms/FormError";
import { store } from "../context/Store";
import axios from "axios";
import close from "./../../assets/svg/close.svg";
import { sr, en } from "./../../dict";

const RegisterForm = (props) => {
	const globalState = useContext(store);
	const { dispatch } = globalState;
	let { lang } = globalState.state;

	const validationSchema = Yup.object().shape({
		firstName: Yup.string()
			.min(
				3,
				lang == "sr"
					? sr.validationSchemaRegister.minFirstName
					: en.validationSchemaRegister.minFirstName
			)
			.max(
				255,
				lang == "sr"
					? sr.validationSchemaRegister.maxFirstName
					: en.validationSchemaRegister.maxFirstName
			)
			.required(
				lang == "sr"
					? sr.validationSchemaRegister.firstNameRequired
					: en.validationSchemaRegister.firstNameRequired
			),
		lastName: Yup.string()
			.min(
				3,
				lang == "sr"
					? sr.validationSchemaRegister.minLastName
					: en.validationSchemaRegister.minLastName
			)
			.max(
				255,
				lang == "sr"
					? sr.validationSchemaRegister.minLastName
					: en.validationSchemaRegister.minLastName
			)
			.required(
				lang == "sr"
					? sr.validationSchemaRegister.lastNameRequired
					: en.validationSchemaRegister.lastNameRequired
			),
		email: Yup.string()
			.email(
				lang == "sr"
					? sr.validationSchemaRegister.invalidMail
					: en.validationSchemaRegister.invalidMail
			)
			.min(
				3,
				lang == "sr"
					? sr.validationSchemaRegister.minMail
					: en.validationSchemaRegister.minMail
			)
			.max(
				50,
				lang == "sr"
					? sr.validationSchemaRegister.maxMail
					: en.validationSchemaRegister.maxMail
			)
			.required(
				lang == "sr"
					? sr.validationSchemaRegister.requiredMail
					: en.validationSchemaRegister.requiredMail
			),
		password: Yup.string()
			.min(
				6,
				lang == "sr"
					? sr.validationSchemaRegister.minPass
					: en.validationSchemaRegister.minPass
			)
			.required(
				lang == "sr"
					? sr.validationSchemaRegister.requiredPass
					: en.validationSchemaRegister.requiredPass
			),
		passwordConfirm: Yup.string()
			.oneOf(
				[Yup.ref("password"), null],
				lang == "sr"
					? sr.validationSchemaRegister.passConfirmWrong
					: en.validationSchemaRegister.passConfirmWrong
			)
			.required(
				lang == "sr"
					? sr.validationSchemaRegister.requiredPass
					: en.validationSchemaRegister.requiredPass
			)
	});

	let userEmail = props.email;

	useEffect(() => {
		userEmail = props.email;
	}, [props.email]);

	return (
		<Fragment>
			<div
				className="modal fade"
				tabIndex="-1"
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
									let res = await axios.post("/api/users", body, config);

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
									res = await axios.get("/api/auth");

									dispatch({
										type: "LOAD_USER",
										payload: res.data
									});
									document.getElementById("registerButton").click();
								} catch (err) {
									let el = document.getElementById("registerError");
									let errMsg = "";
									switch (err.response.data.errors[0].msg) {
										case "User already exists":
											errMsg =
												lang == "sr"
													? "Korisnik već postoji"
													: "User already exists";
											break;
										default:
											errMsg = err.response.data.errors[0].msg;
									}
									el.innerHTML = errMsg;
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
							<div
								className="modal-dialog  justify-content-center"
								role="document"
							>
								<div className="modal-content">
									<div className="row modalHead formRow justify-content-between">
										<span>
											{lang == "sr"
												? sr.registerForm.loginTitle
												: en.registerForm.loginTitle}
										</span>
										<img
											src={close}
											className="closeButton"
											data-toggle="modal"
											data-target="#registrationModal"
										/>
									</div>
									<div className="modalBody">
										<div className="form-row formRow">
											<div className="col-sm-12 col-lg-6 mb-2">
												<div className="form-group">
													<label htmlFor="firstName">
														{lang == "sr"
															? sr.registerForm.firstName
															: en.registerForm.firstName}
													</label>
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
													<label htmlFor="lastName">
														{lang == "sr"
															? sr.registerForm.lastName
															: en.registerForm.lastName}
													</label>
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
													{lang == "sr"
														? sr.registerForm.password
														: en.registerForm.password}
													<span className=" ml-2 labelMin">
														{lang == "sr"
															? sr.registerForm.passwordMin
															: en.registerForm.passwordMin}
													</span>
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
													{lang == "sr"
														? sr.registerForm.passwordConfirm
														: en.registerForm.passwordConfirm}
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
									<div className="formRow form-row d-flex centerRowY justify-content-between pr-2 pl-2">
										<span className="formError" id="registerError"></span>
										<button
											type="submit"
											className="modalButton modalButtonFix"
											disabled={isSubmitting}
										>
											{lang == "sr"
												? sr.registerForm.submitButton
												: en.registerForm.submitButton}
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

export default RegisterForm;
