import React, { useContext, useState, useEffect } from "react";
import pdf from "../../../assets/svg/pdf.svg";

import Reservation from "./PDF/Reservation";
import ReservationEN from "./PDF/ReservationEN";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";

import { store } from "./../../context/Store";
import { sr, en } from "./../../../dict";

const Success = (props) => {
	const green = "#34e83b";

	const globalState = useContext(store);
	let { lang } = globalState.state;

	const { firstName, lastName } = props.formData;

	const section = props.section.substring(4);
	const sectionEN = section == "Nutricionista" ? "Nutritionist" : "Massage";

	return (
		<div className="col-md-7 col-10 successBox mt-4">
			<div className="checkmark ">
				<svg
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 161.2 161.2"
					enable-background="new 0 0 161.2 161.2"
					xmlSpace="preserve"
				>
					<path
						className="path"
						fill="none"
						stroke={green}
						stroke-miterlimit="10"
						d="M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4
          c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5
          c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z"
					/>
					<circle
						className="path"
						fill="none"
						stroke={green}
						stroke-width="4"
						stroke-miterlimit="10"
						cx="80.6"
						cy="80.6"
						r="62.1"
					/>
					<polyline
						className="path"
						fill="none"
						stroke={green}
						stroke-width="6"
						stroke-linecap="round"
						stroke-miterlimit="10"
						points="113,52.8 
          74.1,108.4 48.2,86.4 "
					/>

					<circle
						className="spin"
						fill="none"
						stroke={green}
						stroke-width="4"
						stroke-miterlimit="10"
						stroke-dasharray="12.2175,12.2175"
						cx="80.6"
						cy="80.6"
						r="73.9"
					/>
				</svg>
			</div>
			<p className="success">
				{lang == "sr" ? sr.success.successMessage : en.success.successMessage}
			</p>

			<p className="successBelow">
				{lang == "sr" ? sr.success.pdfMessage : en.success.pdfMessage}
				<PDFDownloadLink
					document={
						lang == "sr" ? (
							<Reservation formData={props.formData} section={section} />
						) : (
							<ReservationEN formData={props.formData} section={sectionEN} />
						)
					}
					fileName={`${lastName}, ${firstName} - ${
						lang == "sr" ? section : sectionEN
					}`}
				>
					{({ blob, url, loading, error }) =>
						loading ? (
							"Loading..."
						) : (
							<img src={pdf} className="pdfIcon ml-2" alt="pdf" />
						)
					}
				</PDFDownloadLink>
			</p>
		</div>
	);
};

export default Success;
