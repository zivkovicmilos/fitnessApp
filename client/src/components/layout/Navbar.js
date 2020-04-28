import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark nav-wrapper">
			<a className="navbar-brand" href="#">
				LOGO
			</a>
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

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/usluge">
							USLUGE
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/onama">
							O NAMA
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="zakazivanje">
							ZAKAZIVANJE
						</Link>
					</li>
				</ul>
				<div className="my-2 my-lg-0">yoo</div>
			</div>
		</nav>
	);
};

export default Navbar;
