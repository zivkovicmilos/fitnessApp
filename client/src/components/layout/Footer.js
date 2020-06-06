import React, { useContext, useEffect, useState } from "react";
import bottomPartGray from "../../assets/svg/bottomPartGray.svg";
import bottomPartWhite from "../../assets/svg/bottomPartWhite.svg";
import { store } from "./../context/Store";
import { sr, en } from "./../../dict";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Footer = (props) => {
	const globalState = useContext(store);
	let { lang } = globalState.state;

	const [sectionLoaded, setSectionLoaded] = useState(false);

	useEffect(() => {
		setSectionLoaded(true);
	}, []);

	let bottomPart;
	if (props.color == "gray") {
		bottomPart = <img src={bottomPartGray} className="bottomPartGray" />;
	} else {
		bottomPart = <img src={bottomPartWhite} className="bottomPartWhite" />;
	}
	return (
		<CSSTransition
			in={sectionLoaded}
			timeout={300}
			classNames="fade"
			unmountOnExit
			onExited={() => setSectionLoaded(false)}
		>
			<div className="row footer text-center">
				{bottomPart}
				<div className="col-md-4">
					Copyright &copy; {new Date().getFullYear()}
				</div>
				<div className="col-md-4">
					{lang == "sr" ? sr.footer.authors : en.footer.authors}
				</div>
				<div className="col-md-4 text-center">
					{lang == "sr" ? sr.footer.school : en.footer.school} <br />
					{lang == "sr" ? sr.footer.uni : en.footer.uni}
				</div>
			</div>
		</CSSTransition>
	);
};

export default Footer;
