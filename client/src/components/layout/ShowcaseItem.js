import React from "react";
import starFull from "../../assets/svg/starFull.svg";

const ShowcaseItem = () => {
	return (
		<div class="col-md-3 col-md-offset-1">
			<div class="showcaseBox">
				<div class="showcaseImg"></div>
				<div class="showcaseBoxLower">
					<h1 class="showcaseTitle">Trening 1</h1>
					<div class="rating">
						<div class="stars">
							<img src={starFull} class="star" />
							<img src={starFull} class="star" />
							<img src={starFull} class="star" />
							<img src={starFull} class="star" />
							<img src={starFull} class="star" />
						</div>
						<h2 class="showcaseNum">(356)</h2>
					</div>
					<p class="showcaseDesc">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Curabitur porta vehicula tempor. Vivamus faucibus
						aliquam faucibus aliquam faucibus aliquam faucibus...
					</p>
				</div>
			</div>
		</div>
	);
};

export default ShowcaseItem;
