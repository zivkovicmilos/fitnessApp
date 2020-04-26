import React from "react";

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
						<a className="nav-link" href="#">
							USLUGE
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							O NAMA
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							ZAKAZIVANJE
						</a>
					</li>
				</ul>
				<div className="my-2 my-lg-0">yoo</div>
			</div>
		</nav>
	);
};

export default Navbar;
