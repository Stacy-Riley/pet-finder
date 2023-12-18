import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/navigation.css';

function Navigation(){
	const[menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		console.log("is closed - clicked")
		setMenuOpen(false);
	}

	return (
		<div className='nav-wrapper overlay' 
		// onClick allows user to click anywhere in this div to close the modal
		onClick={toggleMenu}>
			<nav className='nav-container'>
				<div className="menu-icon" onClick={toggleMenu}>
        			{/* Hamburger Icon */}
					{/* If menuOpen is true, the className of 'open' is added */}
					<div className={`bar ${menuOpen ? 'open' : ''}`}></div>
					<div className={`bar ${menuOpen ? 'open' : ''}`}></div>
					<div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      			</div>
				{/* If className of 'open' was added, these list items will be displayed */}
				<ul className={`menu ${menuOpen ? 'open' : ''}`}>
					<li><a href="#" onClick={closeMenu}>Adopt</a></li>
					<li>
						<Link to="search/dog">Dogs &nbsp; Puppies</Link>
					</li>
					<li><a href="#" onClick={closeMenu}>Cats &nbsp; Kittens</a></li>
					<li><a href="#" onClick={closeMenu}>Other Pets</a></li>
					<li><a href="#" onClick={closeMenu}>Sign Up</a></li>
					<li><a href="#" onClick={closeMenu}>Log In</a></li>	
				</ul>
    		</nav>
		 </div>
	)
}

export default Navigation;