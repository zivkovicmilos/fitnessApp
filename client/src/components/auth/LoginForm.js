import React, { Fragment, useState, useContext } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import FormError from "./../layout/Forms/FormError";
import { store } from "../context/Store";
import axios from "axios";

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email("Nevalidan mejl")
		.min(3, "Prekratak mejl")
		.max(50, "Predugačak mejl")
		.required("Mejl je obavezan"),
	password: Yup.string().min(6, "Prekratka šifra").required("Šifra je obavezna")
});

const LoginForm = () => {
	const globalState = useContext(store);
	const { dispatch } = globalState;

	return (
		<Fragment>
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#loginModal"
				id="loginButton"
			>
				Prijavi se
			</button>

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
								} catch (err) {
									console.log(err);
									dispatch({
										type: "LOGOUT",
										payload: {}
									});
								}

								document.getElementById("loginButton").click();
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
									<div className="row modalHead centerRow formRow justify-content-center">
										PRIJAVA
									</div>
									<div className="modalBody">
										<div className="form-row formRow">
											<div className="form-group">
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
											<div className="form-group">
												<label htmlFor="password">Lozinka</label>
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
									<div className="text-right">
										<button
											type="submit"
											className="modalButton"
											disabled={isSubmitting}
										>
											Prijava
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
