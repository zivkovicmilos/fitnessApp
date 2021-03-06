import React, { Fragment, useContext, useState, useEffect } from "react";
import pencil from "../../../assets/svg/pencil.svg";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import FormError from "./../Forms/FormError";
import { store } from "../../context/Store";
import axios from "axios";
import close from "./../../../assets/svg/close.svg";
import { useLocation } from "react-router-dom";
import { sr, en } from "./../../../dict";

const ReviewButton = (props) => {
	const globalState = useContext(store);
	let { user } = globalState.state;
	let { lang } = globalState.state;
	const { dispatch } = globalState;

	const validationSchema = Yup.object().shape({
		rating: Yup.number()
			.min(
				1,
				lang == "sr"
					? sr.validationSchemaMark.minMark
					: en.validationSchemaMark.minMark
			)
			.max(
				5,
				lang == "sr"
					? sr.validationSchemaMark.maxMark
					: en.validationSchemaMark.maxMark
			)
			.required(
				lang == "sr"
					? sr.validationSchemaMark.requiredMark
					: en.validationSchemaMark.requiredMark
			),
		comment: Yup.string()
			.min(
				10,
				lang == "sr"
					? sr.validationSchemaMark.minComment
					: en.validationSchemaMark.minComment
			)
			.max(
				255,
				lang == "sr"
					? sr.validationSchemaMark.maxComment
					: en.validationSchemaMark.maxComment
			)
	});

	let { reviews } = props;
	let location = useLocation();
	let id = location.pathname.split("/")[3];

	const [canReview, setCanReview] = useState(false);

	useEffect(() => {
		if (user && reviews != null) {
			// Check if user has reserved this workout
			let reserved = false;
			for (let i = 0; i < user.workouts.length; i++) {
				if (user.workouts[i].workoutID == id) {
					// User has reserved this workout
					reserved = true;
					break;
				}
			}

			// Check if the user has already been to this workout
			let found = false;

			for (let i = 0; i < reviews.length; i++) {
				if (reviews[i].user == user._id) {
					found = true;
					break;
				}
			}
			if (!found && reserved) setCanReview(true);
		}
	}, [user, reviews]);

	return (
		<Fragment>
			<button
				className={`reviewButton button ${canReview ? "" : "disabledBtn"}`}
				data-toggle="modal"
				data-target="#reviewModal"
				id="reviewButton"
			>
				{lang == "sr"
					? sr.reviewButton.reviewButton
					: en.reviewButton.reviewButton}
				<img src={pencil} className="icon" />
			</button>

			<div className="modal fade" tabIndex="-1" id="reviewModal" role="dialog">
				<Formik
					initialValues={{
						rating: 5,
						comment: ""
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
							className="reviewForm d-flex justify-content-center"
							onSubmit={async (e) => {
								e.preventDefault();

								const config = {
									headers: {
										"Content-Type": "application/json"
									}
								};

								const body = JSON.stringify({
									rating: values.rating,
									comment: values.comment,
									userId: user._id
								});

								try {
									let res = await axios.post(
										`/api/workouts/${id}`,
										body,
										config
									);
								} catch (err) {
									console.log(`Error! ${err}`);
								}

								document.getElementById("reviewButton").click();
								dispatch({
									type: "RELOAD",
									payload: ""
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
												? sr.reviewButton.reviewTitle
												: en.reviewButton.reviewTitle}
										</span>
										<img
											src={close}
											className="closeButton"
											data-toggle="modal"
											data-target="#reviewModal"
										/>
									</div>
									<div className="modalBody">
										<div className="form-row formRow">
											<label htmlFor="rating" className="mb-0 mr-2">
												{lang == "sr"
													? sr.reviewButton.reviewText
													: en.reviewButton.reviewText}
											</label>
											<div className="form-check form-check-inline">
												<div className="custom-control custom-radio row">
													<input
														type="radio"
														className="custom-control-input form-check-input"
														id="star1"
														name="rating"
														value="1"
														checked={values.rating === 1}
														onChange={() => setFieldValue("rating", 1)}
													/>
													<label
														className="custom-control-label form-check-label"
														htmlFor="star1"
													>
														1
													</label>
												</div>
											</div>
											<div className="form-check form-check-inline ml-2">
												<div className="custom-control custom-radio row">
													<input
														type="radio"
														className="custom-control-input form-check-input"
														id="star2"
														name="rating"
														value="2"
														checked={values.rating === 2}
														onChange={() => setFieldValue("rating", 2)}
													/>
													<label
														className="custom-control-label form-check-label"
														htmlFor="star2"
													>
														2
													</label>
												</div>
											</div>
											<div className="form-check form-check-inline ml-2">
												<div className="custom-control custom-radio row">
													<input
														type="radio"
														className="custom-control-input form-check-input"
														id="star3"
														name="rating"
														value="3"
														checked={values.rating === 3}
														onChange={() => setFieldValue("rating", 3)}
													/>
													<label
														className="custom-control-label form-check-label"
														htmlFor="star3"
													>
														3
													</label>
												</div>
											</div>
											<div className="form-check form-check-inline ml-2">
												<div className="custom-control custom-radio row">
													<input
														type="radio"
														className="custom-control-input form-check-input"
														id="star4"
														name="rating"
														value="4"
														checked={values.rating === 4}
														onChange={() => setFieldValue("rating", 4)}
													/>
													<label
														className="custom-control-label form-check-label"
														htmlFor="star4"
													>
														4
													</label>
												</div>
											</div>
											<div className="form-check form-check-inline ml-2">
												<div className="custom-control custom-radio row">
													<input
														type="radio"
														className="custom-control-input form-check-input"
														id="star5"
														name="rating"
														value="5"
														checked={values.rating === 5}
														onChange={() => setFieldValue("rating", 5)}
													/>
													<label
														className="custom-control-label form-check-label"
														htmlFor="star5"
													>
														5
													</label>
												</div>
											</div>
										</div>
										<div className="form-group">
											<label htmlFor="comment" className="ml-0 mt-2">
												{lang == "sr"
													? sr.reviewButton.reviewComment
													: en.reviewButton.reviewComment}
											</label>
											<div className="invalid-group textAreaInvalid">
												<textarea
													className={`form-control ${
														touched.comment && errors.comment
															? "is-invalid"
															: null
													} ${
														touched.comment && !errors.comment
															? "is-valid"
															: null
													}`}
													id="comment"
													name="comment"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.comment}
												/>
												<FormError
													touched={touched.comment}
													message={errors.comment}
												/>
											</div>
										</div>
									</div>
									<div className="text-right">
										<button
											type="submit"
											className="modalButton"
											disabled={isSubmitting}
										>
											{lang == "sr"
												? sr.reviewButton.reviewSubmit
												: en.reviewButton.reviewSubmit}
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

export default ReviewButton;
