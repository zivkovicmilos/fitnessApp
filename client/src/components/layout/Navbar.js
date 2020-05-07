import React from "react";
import { Link } from "react-router-dom";
//import LoginForm from "../auth/LoginForm";
//import RegisterForm from "../auth/RegisterForm";
import Language from "./Language";
import User from "./User";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark nav-wrapper">
			<Link className="navbar-brand" to="/">
				LOGO
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/usluge/treninzi">
							USLUGE
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/oNama">
							O NAMA
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/zakazivanje">
							ZAKAZIVANJE
						</Link>
					</li>
				</ul>
			</div>
			<div className="row centerRowY mr-5">
				<Language />
			</div>
		</nav>
	);
};

export default Navbar;
