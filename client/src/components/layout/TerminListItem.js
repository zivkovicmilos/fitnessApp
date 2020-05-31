import React, { useState, useContext } from "react";
import bin from "../../assets/svg/bin.svg";
import { Formik, Field } from "formik";
import axios from "axios";
import { store } from "./../context/Store";

const TerminListItem = (props) => {
	const { workoutID, workoutDate, workoutTime } = props;

	const globalState = useContext(store);
	let { user } = globalState.state;
	const { dispatch } = globalState;

	return (
		<Formik
			initialValues={{
				workoutDate: workoutDate,
				workoutTime: workoutTime
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
					onSubmit={async (e) => {
						e.preventDefault();

						const config = {
							headers: {
								"Content-Type": "application/json"
							}
						};

						const body = JSON.stringify({
							workoutDate: values.workoutDate,
							workoutTime: values.workoutTime
						});

						try {
							let res = await axios.post(
								`/api/users/delete/${user.email}/${workoutID}`,
								body,
								config
							);

							res = await axios.get("/api/auth");

							dispatch({
								type: "LOAD_USER",
								payload: res.data
							});
						} catch (err) {
							console.log(err);
						}
					}}
				>
					<div className="row mb-4">
						<div className="col-12 treningListItem align-items-center">
							<div className="row">
								<div
									className={`col-lg-3 col-sm-5 col-xs-12 ${props.image} terminImgNew`}
								></div>
								<div className="col-lg-8 col-sm-6 col-xs-12 p-3 pl-5">
									<div className="row centerRowY">
										<span className="typeTitle">{props.title}</span>
										<span className="typeInfo">{props.subtitle}</span>
									</div>

									<div className="row typeDesc">{props.text}</div>
								</div>
								<div className="col-xs-12 col-sm-1 d-flex justify-content-center align-items-center">
									<input
										type="image"
										src={bin}
										className="trash"
										alt="Delete"
										disabled={isSubmitting}
									/>
								</div>
							</div>
						</div>
					</div>
				</form>
			)}
		</Formik>
	);
};

export default TerminListItem;
