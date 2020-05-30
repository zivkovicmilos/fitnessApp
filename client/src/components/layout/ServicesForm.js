import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormError from "./Forms/FormError";
import Success from "./Forms/Success";
import send from "../../assets/svg/send.svg";

const validationSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(3, "Prekratko ime")
		.max(255, "Ime predugačko")
		.required("Ime je obavezno"),
	lastName: Yup.string()
		.min(3, "Prekratko prezime")
		.max(255, "Prezime predugačko")
		.required("Prezime je obavezno"),
	phone: Yup.string()
		.min(3, "Nevalidan broj")
		.max(255, "Nevalidan broj")
		.required("Telefon je obavezan"),
	date: Yup.date().required("Datum je obavezan"),
	description: Yup.string()
		.min(10, "Opis je prekratak")
		.max(255, "Opis je predugačak")
		.required("Opis je obavezan")
});

const ServicesForm = (props) => {
	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		date: "",
		description: ""
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
					// axios post

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
								<label htmlFor="firstName">Ime</label>
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
								<label htmlFor="lastName">Prezime</label>
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
								<label htmlFor="phone">Telefon</label>
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
								<label htmlFor="date">Datum</label>
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
							<label htmlFor="description">Opis problema</label>
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
								Pošalji
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
