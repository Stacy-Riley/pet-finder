import React, { useState } from 'react';
import './cardLink.css';

function CardForOtherPets () {


	return (
		<div className='cardforotherpets__wrapper animalcard__wrapper'>
			<div className='cardforotherpets__container animalcard__container'>
				<figure>
					<img src="pet-finder/img/icons/paw-2-svgrepo-com.svg" alt='paw print' />
				</figure>
				<p>Other Pets</p>
			</div>
		</div>
	)
}

export default CardForOtherPets;