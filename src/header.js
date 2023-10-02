import React, { useState } from 'react';
import './App.css';
import Navigation from './navigation.js';

function Header() {

	return (
		<div className='header'>
			<div className='header__wrapper'>
				<div className='header__container'>
					<div className='header__container__logo'>
						<p>petfinder</p>	
					</div>
					<div className='header__container__favIcon'>
						<span class="material-symbols-rounded">favorite</span>
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