import React, {useState} from "react";
import { Link } from 'react-router-dom';
import imagesData from "../assets/data/cardData.js";

//Function to display (3)Image cards and link to search component when clicked on:
function ImageCardDisplay() {

	return(
	  <div className='card-search__wrapper'> 
		<div className='card-search__container'>	  
		 {imagesData.map((card) => {
			//   console.log('Card Component:', card.component);
				return (
					<Link key={card.id} to={`/search/${card.component}`} style={{ textDecoration: 'none' }}>
						<div key={card.id} className="card">
							<figure>
								<img src={require(`../assets/icons/${card.image}`)} alt={card.title}/>
							</figure>
							<p>{card.title}</p>
						
						</div>
					</Link>
				);
			})}

		</div> 
	  </div> 
	)
  }


  export default ImageCardDisplay