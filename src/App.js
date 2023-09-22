//constructor function is uppercase
import React, { useState } from 'react';
import './App.css';
import database from './database.json';
import PetCard from './petcard.js';
import SearchBar from './searchbar.js';
import SearchDog from './searchdog.js';

function App() {
  //Create state variables 
  const [filteredPets, setFilteredPets] = useState(database);
  const [filteredDogs, setFilteredDogs] = useState(database);
  //This state controls card visibility at page load
  const [showPetCard, setShowPetCard] = useState(false);
  const [showDogCard, setDogCard] = useState(false);

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
const handleDogSearch = (ageValue) => {
  //test that it is working
  // console.log('Search Dog age:', ageValue);
  const filteredAttributes = database.filter((pet) =>
  pet.age.toLowerCase().includes(ageValue.toLowerCase())
  );

  setFilteredDogs(filteredAttributes);
  setDogCard(true);
}

  return (
    <div>
      <div>
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
