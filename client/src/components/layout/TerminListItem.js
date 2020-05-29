import React from "react";
import bin from "../../assets/svg/bin.svg";

const TerminListItem = (props) => {
	return (
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
						<img src={bin} className="trash" alt="Img error!" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TerminListItem;
