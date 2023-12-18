import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation.js';

function Header() {

	return (
		<div className='header'>
			<div className='header__wrapper'>
				<div className='header__container'>
					<div className='header__container__logo'>
						<Link to="/" style={{ textDecoration: 'none' }}>
							<p>petfinder</p>
						</Link>
					</div>
					<div className='header__container__favIcon'>
						<span className="material-symbols-rounded">favorite</span>
					</div>
					<div className='header__container__nav'>
						<Navigation/>
					</div>
				</div>			
			</div>
		</div>

	)
}

export default Header;