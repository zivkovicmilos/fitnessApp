import React, { useState, useContext, Fragment } from "react";
import send from "../../assets/svg/send.svg";
import { store } from "./../context/Store";
import { sr, en } from "./../../dict";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import FormError from "./../layout/Forms/FormError";
import axios from "axios";
import SuccessContact from "./Forms/SuccessContact";

const ContactMail = () => {
	const globalState = useContext(store);

	const [contactSubmitted, setContactSubmitted] = useState(false);

	let { lang } = globalState.state;

	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.min(
				3,
				lang == "sr"
					? sr.validationSchemaContactForm.minName
					: en.validationSchemaContactForm.minName
			)
			.max(
				255,
				lang == "sr"
					? sr.validationSchemaContactForm.maxName
					: en.validationSchemaContactForm.maxName
			)
			.required(
				lang == "sr"
					? sr.validationSchemaContactForm.nameRequired
					: en.validationSchemaContactForm.nameRequired
			),
		email: Yup.string()
			.email(
				lang == "sr"
					? sr.validationSchemaContactForm.invalidMail
					: en.validationSchemaContactForm.invalidMail
			)
			.min(
				3,
				lang == "sr"
					? sr.validationSchemaContactForm.minMail
					: en.validationSchemaContactForm.minMail
			)
			.max(
				255,
				lang == "sr"
					? sr.validationSchemaContactForm.maxMail
					: en.validationSchemaContactForm.maxMail
			)
			.required(
				lang == "sr"
					? sr.validationSchemaContactForm.requiredMail
					: en.validationSchemaContactForm.requiredMail
			),
		message: Yup.string()
			.min(
				10,
				lang == "sr"
					? sr.validationSchemaContactForm.minMsg
					: en.validationSchemaContactForm.minMsg
			)
			.max(
				500,
				lang == "sr"
					? sr.validationSchemaContactForm.maxMsg
					: en.validationSchemaContactForm.maxMsg
			)
			.required(
				lang == "sr"
					? sr.validationSchemaContactForm.requiredDesc
					: en.validationSchemaContactForm.requiredDesc
			)
	});

	if (!contactSubmitted) {
		return (
			<Fragment>
				<Formik
					initialValues={{
						name: "",
						email: "",
						message: ""
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
						isSubmitting,
						setFieldValue
					}) => (
						<form
							className="contactForm"
							onSubmit={async (e) => {
								e.preventDefault();

								const config = {
									headers: {
										"Content-Type": "application/json"
									}
								};

								const body = JSON.stringify({
									name: values.name,
									email: values.email,
									message: values.message
								});

								try {
									let res = await axios.post("/api/mail", body, config);
									// Set the success spinner!
									setContactSubmitted(true);
									setTimeout(() => {
										setContactSubmitted(false);
									}, 10000);
								} catch (err) {
									console.log(err);
								}
							}}
						>
							<div className="form-row">
								<div className="form-group mr-3 mb-0">
									<label for="name">
										{lang == "sr"
											? sr.contactMail.contactName
											: en.contactMail.contactName}
									</label>
									<div className="invalid-group">
										<input
											type="text"
											className={`form-control credentials ${
												touched.name && errors.name ? "is-invalid" : null
											} ${touched.name && !errors.name ? "is-valid" : null}`}
											id="name"
											name="name"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.name}
										/>
										<FormError touched={touched.name} message={errors.name} />
									</div>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group mr-3 mb-0">
									<label for="email">E-mail</label>
									<div className="invalid-group">
										<input
											type="text"
											className={`form-control credentials ${
												touched.email && errors.email ? "is-invalid" : null
											} ${touched.email && !errors.email ? "is-valid" : null}`}
											id="email"
											name="email"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email}
										/>
										<FormError touched={touched.email} message={errors.email} />
									</div>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group mr-3 mb-0">
									<label for="message">
										{lang == "sr"
											? sr.contactMail.contactMsg
											: en.contactMail.contactMsg}
									</label>
									<div className="invalid-group msgArea">
										<textarea
											className={`form-control credentials ${
												touched.message && errors.message ? "is-invalid" : null
											} ${
												touched.message && !errors.message ? "is-valid" : null
											}`}
											id="message"
											name="message"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.message}
										/>
										<FormError
											touched={touched.message}
											message={errors.message}
										/>
									</div>
								</div>
							</div>
							<div className="form-row mt-3">
								<div className="text-right">
									<button
										className="button"
										type="submit"
										disabled={isSubmitting}
									>
										{lang == "sr"
											? sr.contactMail.contactButton
											: en.contactMail.contactButton}
										<img src={send} className="icon" />
									</button>
								</div>
							</div>
						</form>
					)}
				</Formik>
			</Fragment>
		);
	} else {
		return <SuccessContact />;
	}
};

export default ContactMail;
