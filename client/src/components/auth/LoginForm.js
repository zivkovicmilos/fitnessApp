import React, { Fragment, useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import FormError from "./../layout/Forms/FormError";
import e from "express";

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email("Nevalidan mejl")
		.min(3, "Prekratak mejl")
		.max(50, "Predugačak mejl")
		.required("Mejl je obavezan"),
	password: Yup.string().min(6, "Prekratka šifra").required("Šifra je obavezna")
});

const LoginForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});
	/*
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

			<div className="modal fade" tabindex="-1" id="loginModal" role="dialog">
				<Formik
					initialValues={{
						email: "",
						password: ""
					}}
					validationSchema={validationSchema}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						setSubmitting(true);
						// axios post

						//document.getElementById("loginModal").modal();
						alert("I'm HEREEEE");
						setFormData({
							...formData,
							email: values.email,
							password: values.password
						});

						resetForm();
						setSubmitting(false);
					}}
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
							onSubmit={(e) => {
								e.preventDefault();

								handleSubmit(values);
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
												<label for="email">E-mail</label>
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
												<label for="password">Lozinka</label>
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
	*/
	return <div></div>;
};

export default LoginForm;
