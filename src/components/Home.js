import React, { useState } from 'react';
import database from '../assets/data/database.json';
import PetCard from '../components/PetCard.js';
import SearchBar from '../components/SearchBar.js';
import ImageCardDisplay from '../components/ImageCardDisplay.js';
import '../App.css';
import '../styles/cardLink.css';

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
				<h2>Planning to Adopt a Pet?</h2>
				<div>

				</div>
        	</div>
		</>
	)
}






export default Home;