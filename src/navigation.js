import React, { useState } from 'react';
import './navigation.css';

function Navigation(){
	const[isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		console.log("is closed - clicked")
		setIsMenuOpen(false);
	}

	return (
		// <div>
			<nav>
				<div className="menu-icon" onClick={toggleMenu}>
        			{/* Hamburger Icon */}
					<div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
					<div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
					<div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      			</div>
				<ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
					<li><a href="#" onClick={closeMenu}>Adopt</a></li>
					<li><a href="#" onClick={closeMenu}>Dogs &nbsp; Puppies</a></li>
					<li><a href="#" onClick={closeMenu}>Cats &nbsp; Kittens</a></li>
					<li><a href="#" onClick={closeMenu}>Other Pets</a></li>
					<li><a href="#" onClick={closeMenu}>Sign Up</a></li>
					<li><a href="#" onClick={closeMenu}>Log In</a></li>	
				</ul>
    		</nav>
		// </div>
	)
}

export default Navigation;