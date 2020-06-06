import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Loading = () => {
	const [sectionLoaded, setSectionLoaded] = useState(false);

	useEffect(() => {
		setSectionLoaded(true);
	}, []);
	return (
		<CSSTransition
			in={sectionLoaded}
			timeout={300}
			classNames="fade"
			unmountOnExit
			onExited={() => setSectionLoaded(false)}
		>
			<div className="container-fluid">
				<div className="row loadingRow centerRow">
					<div className="lds-grid">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export default Loading;
