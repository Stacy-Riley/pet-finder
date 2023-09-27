//constructor function is uppercase
import React, { useState } from 'react';
import './App.css';
import database from './database.json';
import PetCard from './petcard.js';
import SearchBar from './searchbar.js';
import SearchDog from './searchdog.js';
import Header from './header.js';

function App() {
  //Create state variables 
  const [filteredPets, setFilteredPets] = useState(database);
  const [filteredDogs, setFilteredDogs] = useState(database);
  //This state controls card visibility at page load
  const [showPetCard, setShowPetCard] = useState(false);
  const [showDogCard, setShowDogCard] = useState(false);

  //Used for searchbar.js
  const handleSearch = (searchTerm) => {
    //test that it is working
  // console.log('Search Term:', searchTerm);
    const filtered = database.filter((pet) =>
    pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) 
);

  setFilteredPets(filtered);
  setShowPetCard(true);

  //test that is is working
  // console.log('Filtered Pets:', filtered);
}

//used for searchdog.js
  const handleDogSearch = (filters) => {
  //This takes in the "filters" the user selected in the searchdog.js form
      const filteredResults = database.filter((pet) => {
        //typeMatch makes sure we are only displaying "dog"
        const typeMatch = filters.type === pet.type;
        const breedMatch = filters.breed.toLowerCase() === pet.breed.toLowerCase() || filters.breed === '';
        const ageMatch = filters.age.toLowerCase() === pet.age.toLowerCase() || filters.age === '';
        const genderMatch = filters.gender.toLowerCase() === pet.gender.toLowerCase() || filters.gender === '';
        const sizeMatch = filters.size.toLowerCase() === pet.size.toLowerCase() || filters.size === '';
        //Only return items that match all the above properties:
        return typeMatch && breedMatch && ageMatch && genderMatch && sizeMatch;
        });

    setFilteredDogs(filteredResults);
    setShowDogCard(true);
  }

  return (
    <div>
      <div>
        <Header/>
        <h1>Search here for your new pet today</h1>
        <SearchBar onSearch={handleSearch}/>
        {/* Conditionally render the PetCard Component */}
        {showPetCard && <PetCard data={filteredPets} />}
      </div>
      <br/>
      <br/>
      <div>
        <SearchDog onClick={handleDogSearch}/>
        {showDogCard && <PetCard data={filteredDogs} />}
      </div>
    </div>
  );
}


export default App;
