import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import database from '../assets/data/database.json';
import PetCard from '../components/PetCard.js';
import SearchBar from '../components/SearchBar.js';
import ImageCardDisplay from '../components/ImageCardDisplay.js';
import '../App.css';
import '../styles/cardLink.css';
import imagesData from "../assets/data/cardData.js";

function Home(){
//Create state variables 
const [filteredPets, setFilteredPets] = useState(database);
//This state controls card visibility at page load
const [showPetCard, setShowPetCard] = useState(false);
//This state controls searchBar in header visibility:
const [isSearchBarVisible, setSearchBarVisibility] = useState(true);

//Used for searchbar.js
const handleSearch = (searchTerm) => {
  //test that it is working
// console.log('Search Term:', searchTerm);
  const filtered = database.filter((pet) => {
	const breedMatch = searchTerm.toLowerCase() === pet.breed.toLowerCase();
	const typeMatch = searchTerm.toLowerCase() === pet.type.toLowerCase();
  //Only return items that match all the above properties:
	return breedMatch || typeMatch;
})

setFilteredPets(filtered);
setShowPetCard(true);
}

	return (
		<>
			<div className='homepage__wrapper_1'>
				{/* First Searchbar */}
				<div>
					<SearchBar 
						onSearch={handleSearch}
						isVisible={isSearchBarVisible}
					/>
				</div>

				<div>
					{/* Conditionally render the PetCard Component */}
					{showPetCard && <PetCard data={filteredPets} />}
				</div>
				

				<div>
					{/* Section that shows imagecards that when clicked on open form */}
					<ImageCardDisplay />
				</div>
			</div>

			<div className='homepage__wrapper_2'>
				<div>
					<h2>Planning to Adopt a Pet?</h2>
					<div className='homepage__wrapper_2_container_adoption_info'>
						<Link to="/adoption/checklist">
							<div className='homepage__wrapper_2_adoption_checklist'>
							{/* By adding .default after the require statement, I'm explicitly accessing the URL of the image from the object returned by require.  */}
								<figure>
									<img src={require(`../assets/site_images/wade-austin-ellis-FtuJIuBbUhI-unsplash.jpg`).default} alt="paw icon"/>
								</figure>

								<h2>Checklist For New Adopters</h2>
								<p>Make the adoption process as smooth as possible.</p>

								<button>Learn More</button>
							</div>
						</Link>
						<div className='homepage__wrapper_2_adoption_faq'>
							<figure>
								<img src={require(`../assets/icons/paw-2-svgrepo-com.svg`).default} alt="paw icon"/>
							</figure>

							<h2>Pet Adoption FAQs</h2>
							<p>Get answers to all the questions you haven't thought of for your adoption.</p>
							
							<button>Learn More</button>
						</div>
					</div>
				</div>
        	</div>

			<div className='homepage__wrapper_3'>
				<div className='homepage__wrapper_3_container_adoption_articles'>
					{/* <ArticlesDog /> */}
					{/* <ArticlesCat /> */}
				</div>
        	</div>
		</>
	)
}

//Next:
// begin creating the AdoptionChecklist and AdoptionFAQ components




export default Home;