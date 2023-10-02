import React, { useState } from 'react';
import './cardLink.css';

function CardForDog () {


	return (
		<div className='cardfordog__wrapper animalcard__wrapper'>
			<div className='cardfordog__container animalcard__container'>
				<figure>
					<img src="pet-finder/img/icons/dog-svgrepo-com.svg" alt='dog' />
				</figure>
				<p>Dogs</p>
			</div>
		</div>
	)
}

export default CardForDog;