import React, { useState, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormError from "./Forms/FormError";
import Success from "./Forms/Success";
import send from "../../assets/svg/send.svg";
import { store } from "./../context/Store";
import { sr, en } from "./../../dict";

const ServicesForm = (props) => {
	const globalState = useContext(store);
	let { lang } = globalState.state;

	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		date: "",
		description: ""
	});

	const validationSchema = Yup.object().shape({
		firstName: Yup.string()
			.min(
				3,
				lang == "sr"
					? sr.validationSchemaServiceForm.minFirstName
					: en.validationSchemaServiceForm.minFirstName
			)
			.max(
				255,
				lang == "sr"
					? sr.validationSchemaServiceForm.maxFirstName
					: en.validationSchemaServiceForm.maxFirstName
			)
			.required(
				lang == "sr"
					? sr.validationSchemaServiceForm.firstNameRequired
					: en.validationSchemaServiceForm.firstNameRequired
			),
		lastName: Yup.string()
			.min(
				3,
				lang == "sr"
					? sr.validationSchemaServiceForm.minLastName
					: en.validationSchemaServiceForm.minLastName
			)
			.max(
				255,
				lang == "sr"
					? sr.validationSchemaServiceForm.maxLastName
					: en.validationSchemaServiceForm.maxLastName
			)
			.required(
				lang == "sr"
					? sr.validationSchemaServiceForm.lastNameRequired
					: en.validationSchemaServiceForm.lastNameRequired
			),
		phone: Yup.string()
			.min(
				3,
				lang == "sr"
					? sr.validationSchemaServiceForm.minPhone
					: en.validationSchemaServiceForm.minPhone
			)
			.max(
				255,
				lang == "sr"
					? sr.validationSchemaServiceForm.maxPhone
					: en.validationSchemaServiceForm.maxPhone
			)
			.required(
				lang == "sr"
					? sr.validationSchemaServiceForm.requiredPhone
					: en.validationSchemaServiceForm.requiredPhone
			),
		date: Yup.date().required(
			lang == "sr"
				? sr.validationSchemaServiceForm.requiredDate
				: en.validationSchemaServiceForm.requiredDate
		),
		description: Yup.string()
			.min(
				10,
				lang == "sr"
					? sr.validationSchemaServiceForm.minDesc
					: en.validationSchemaServiceForm.minDesc
			)
			.max(
				255,
				lang == "sr"
					? sr.validationSchemaServiceForm.maxDesc
					: en.validationSchemaServiceForm.maxDesc
			)
			.required(
				lang == "sr"
					? sr.validationSchemaServiceForm.requiredDesc
					: en.validationSchemaServiceForm.requiredDesc
			)
	});

	if (!submitted) {
		return (
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					phone: "",
					date: "",
					description: ""
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setSubmitting(true);

					setFormData({
						...formData,
						firstName: values.firstName,
						lastName: values.lastName,
						phone: values.phone,
						date: values.date,
						description: values.description
					});

					setSubmitted(true);
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
					<form className="servicesForm" onSubmit={handleSubmit}>
						<div className="form-row">
							<div className="form-group mr-3">
								<label htmlFor="firstName">
									{lang == "sr"
										? sr.serviceForm.firstName
										: en.serviceForm.firstName}
								</label>
								<div className="invalid-group">
									<input
										type="text"
										className={`form-control ${
											touched.firstName && errors.firstName
												? "is-invalid"
												: null
										} ${
											touched.firstName && !errors.firstName ? "is-valid" : null
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
							<div className="form-group mr-3">
								<label htmlFor="lastName">
									{lang == "sr"
										? sr.serviceForm.lastName
										: en.serviceForm.lastName}
								</label>
								<div className="invalid-group">
									<input
										type="text"
										className={`form-control ${
											touched.lastName && errors.lastName ? "is-invalid" : null
										} ${
											touched.lastName && !errors.lastName ? "is-valid" : null
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
						<div className="form-row">
							<div className="form-group mr-3">
								<label htmlFor="phone">
									{lang == "sr" ? sr.serviceForm.phone : en.serviceForm.phone}
								</label>
								<div className="invalid-group">
									<input
										type="text"
										className={`form-control ${
											touched.phone && errors.phone ? "is-invalid" : null
										} ${touched.phone && !errors.phone ? "is-valid" : null}`}
										id="phone"
										name="phone"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.phone}
									/>
									<FormError touched={touched.phone} message={errors.phone} />
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="date">
									{lang == "sr" ? sr.serviceForm.date : en.serviceForm.date}
								</label>
								<div className="invalid-group">
									<input
										type="date"
										className={`form-control ${
											touched.date && errors.date ? "is-invalid" : null
										} ${touched.date && !errors.date ? "is-valid" : null}`}
										id="date"
										name="date"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.date}
									/>
									<FormError touched={touched.date} message={errors.date} />
								</div>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="description">
								{lang == "sr" ? sr.serviceForm.desc : en.serviceForm.desc}
							</label>
							<div className="invalid-group textAreaInvalid">
								<textarea
									className={`form-control ${
										touched.description && errors.description
											? "is-invalid"
											: null
									} ${
										touched.description && !errors.description
											? "is-valid"
											: null
									}`}
									id="description"
									name="description"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.description}
								/>
								<FormError
									touched={touched.description}
									message={errors.description}
								/>
							</div>
						</div>
						<div className="text-right">
							<button className="button" type="submit" disabled={isSubmitting}>
								{lang == "sr" ? sr.serviceForm.send : en.serviceForm.send}
								<img src={send} className="icon" />
							</button>
						</div>
					</form>
				)}
			</Formik>
		);
	} else {
		return <Success formData={formData} section={props.section} />;
	}
};

export default ServicesForm;
