import logo from '../assets/Apexlogo.png';

function Navbar() {
	return (
		<>
			{/* hello */}
			<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light opacity-75">
				<a
					className="navbar-brand"
					href="/"
				>
				<img className="logo" src={logo} alt="Logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNav"
				>
					<ul className="navbar-nav ms-auto nav-ul">
						<li className="nav-item active">
							<a
								className="nav-link"
								href="#"
							>
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="#"
							>
								Features
							</a>
						</li>
						<li className="nav-item ">
							<a
								className="nav-link"
								href="#"
							>
								Pricing
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
