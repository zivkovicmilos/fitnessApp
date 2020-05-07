import React from "react";
import starFull from "../../assets/svg/starFull.svg";

const ShowcaseItem = () => {
	//col-md-offset-1
	return (
		<div className="col-lg-4 col-md-6 homeItems">
			<div className="showcaseBox">
				<div className="showcaseImg"></div>
				<div className="showcaseBoxLower">
					<h1 className="showcaseTitle">Trening 1</h1>
					<div className="rating">
						<div className="stars">
							<img src={starFull} className="star" />
							<img src={starFull} className="star" />
							<img src={starFull} className="star" />
							<img src={starFull} className="star" />
							<img src={starFull} className="star" />
						</div>
						<h2 className="showcaseNum">(356)</h2>
					</div>
					<p className="showcaseDesc">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
						porta vehicula tempor. Vivamus faucibus aliquam faucibus aliquam
						faucibus aliquam faucibus...
					</p>
				</div>
			</div>
		</div>
	);
};

export default ShowcaseItem;
