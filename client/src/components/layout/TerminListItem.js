import React from "react";
import bin from "../../assets/svg/bin.svg";

const TerminListItem = (props) => {
	return (
		<div className="row mb-4">
			<div className="col-12 treningListItem align-items-center">
				<div className="row">
					<div className="col-lg-3 col-sm-5 col-xs-12 pl-0 pr-0">
						<img src={props.image} alt="Img error!"></img>
					</div>
					<div className="col-lg-8 col-sm-6 col-xs-12 mt-2">
						<span className="typeTitle">{props.title}</span>
						<span className="typeInfo">{props.subtitle}</span>
						<div className="row treninziDesc">{props.text}</div>
					</div>
					<div className="col-xs-12 col-sm-1 d-flex justify-content-center align-items-center">
						<img
							src={bin}
							className="trash pb-2"
							alt="Img error!"
						></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TerminListItem;
