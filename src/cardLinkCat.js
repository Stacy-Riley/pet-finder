import React, { useState } from 'react';
import './cardLink.css';

function CardForCat () {


	return (
		<div className='cardforcat__wrapper animalcard__wrapper'>
			<div className='cardforcat__container animalcard__container'>
				<figure>
					<img src="pet-finder/img/icons/cat-svgrepo-com.svg" alt='cat' />
				</figure>
				<p>Cats</p>
			</div>
		</div>
	)
}

export default CardForCat;