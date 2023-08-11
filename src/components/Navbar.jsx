import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const [dropdownServices, setDropdownServices] = useState(false);

	return (
		<nav className="nav">
			<div className="logo-container">
				<Link to="/">
					<h1>IT Solution</h1>
				</Link>
				<div className="hamburger-container">
					<div className="hamburger">
						<span className="meat"></span>
						<span className="meat"></span>
						<span className="meat"></span>
					</div>
				</div>
			</div>
			<ul className="navbar-nav">
				<li className="has-dropdown">
					<a
						onClick={() => {
							setDropdownServices(!dropdownServices);
						}}
					>
						<p>Our Services</p>

						{/* <i className="dropdown-icon fa-solid fa-angle-down"></i> */}
						<i
							className={
								dropdownServices
									? 'dropdown-icon-clicked fa-solid fa-angle-down'
									: 'dropdown-icon fa-solid fa-angle-down'
							}
						></i>
					</a>
					{dropdownServices && (
						<div className="dropdown-services">
							<ul>
								<li>
									<Link to="/services/it-infrastructure-design">
										IT Infrastructure Design
									</Link>
								</li>
								<li>
									<Link to="/services/cloud-computing">Cloud Computing</Link>
								</li>
								<li>
									<Link to="/services/cyber-security">Cyber Security</Link>
								</li>
								<li>
									<Link to="/services/data-management-analysis">
										Data Management / Analysis
									</Link>
								</li>
								<li>
									<Link to="/services/it-support">IT Support</Link>
								</li>
								<li>
									<Link to="/services/project-management">
										Project Management
									</Link>
								</li>
							</ul>
						</div>
					)}
				</li>
				<li>
					<Link to="/news">News</Link>
				</li>
				<li>
					<Link to="/about-us">About Us</Link>
				</li>
				<Link to="/contact-us">
					<button className="button-primary">Contact Us</button>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
