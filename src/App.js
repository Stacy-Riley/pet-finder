//constructor function is uppercase
import React, { useState } from 'react';
import database from './assets/data/database.json';
import PetCard from './components/PetCard.js';
import SearchBar from './components/SearchBar.js';
import Header from './components/Header.js';
import ImageCardDisplay from './components/ImageCardDisplay.js';
import './App.css';
import './styles/cardLink.css';


function App() {
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

const toggleSearchBarVisibility = () => {
  setSearchBarVisibility(false);
  //If there were cards displayed in the first searchbar and then an Image card was pressed
  //this will hide the card 
  setShowPetCard(false);
}

  return (
    <div>
      <div className='app-wrapper'>
        <div className='app-container'>
          <Header/>
          <SearchBar 
            onSearch={handleSearch}
            isVisible={isSearchBarVisible}
          />
            {/* Conditionally render the PetCard Component */}
            {showPetCard && <PetCard data={filteredPets} />}
        </div>
        <div>
          {/* Section that shows imagecards that when clicked on open form */}
          <ImageCardDisplay
            onImageClick={toggleSearchBarVisibility}
          />
        </div>
      </div>
    </div>
  );
}


export default App;
