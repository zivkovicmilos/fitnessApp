import React, { Fragment, useContext, useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import FormError from "./../layout/Forms/FormError";
import { store } from "../context/Store";
import axios from "axios";
import close from "./../../assets/svg/close.svg";
import { sr, en } from "./../../dict";

const LoginForm = () => {
	const globalState = useContext(store);

	const [showLogin, setShowLogin] = useState(false);

	let { lang } = globalState.state;
	const { dispatch } = globalState;

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email(
				lang == "sr"
					? sr.validationSchemaLogin.invalidMail
					: en.validationSchemaLogin.invalidMail
			)
			.min(
				3,
				lang == "sr"
					? sr.validationSchemaLogin.minMail
					: en.validationSchemaLogin.minMail
			)
			.max(
				50,
				lang == "sr"
					? sr.validationSchemaLogin.maxMail
					: en.validationSchemaLogin.maxMail
			)
			.required(
				lang == "sr"
					? sr.validationSchemaLogin.requiredMail
					: en.validationSchemaLogin.requiredMail
			),
		password: Yup.string()
			.min(
				6,
				lang == "sr"
					? sr.validationSchemaLogin.minPass
					: en.validationSchemaLogin.minPass
			)
			.required(
				lang == "sr"
					? sr.validationSchemaLogin.requiredPass
					: en.validationSchemaLogin.requiredPass
			)
	});

	return (
		<Fragment>
			<span
				data-toggle="modal"
				data-target="#loginModal"
				id="loginButton"
				className="ml-4 loginText"
			>
				{lang == "sr" ? sr.loginForm.buttonText : en.loginForm.buttonText}
			</span>

			<div className="modal fade" tabIndex="-1" id="loginModal" role="dialog">
				<Formik
					initialValues={{
						email: "",
						password: ""
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
							className="loginForm d-flex justify-content-center"
							onSubmit={async (e) => {
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
									email: values.email,
									password: values.password
								});

								try {
									let res = await axios.post("/api/auth", body, config);

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

									document.getElementById("loginButton").click();
								} catch (err) {
									let el = document.getElementById("loginError");
									let errMsg = "";
									switch (err.response.data.errors[0].msg) {
										case "User does not exist":
											errMsg =
												lang == "sr"
													? "Korisnik ne postoji"
													: "User does not exist";
											break;
										case "Invalid credentials":
											errMsg =
												lang == "sr"
													? "Nevalidni podaci"
													: "Invalid credentials";
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
								className="modal-dialog justify-content-center"
								role="document"
							>
								<div className="modal-content">
									<div className="row modalHead formRow justify-content-between">
										<span>
											{lang == "sr"
												? sr.loginForm.loginTitle
												: en.loginForm.loginTitle}
										</span>
										<img
											src={close}
											className="closeButton"
											data-toggle="modal"
											data-target="#loginModal"
										/>
									</div>
									<div className="modalBody">
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
												<label htmlFor="password">
													{lang == "sr"
														? sr.loginForm.password
														: en.loginForm.password}
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
									</div>
									<div className="formRow d-flex centerRowY justify-content-between pr-2 pl-2">
										<span className="formError" id="loginError"></span>
										<button
											type="submit"
											className="modalButton text-right"
											disabled={isSubmitting}
										>
											{lang == "sr"
												? sr.loginForm.submitButton
												: en.loginForm.submitButton}
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

export default LoginForm;
