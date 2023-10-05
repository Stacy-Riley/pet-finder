//constructor function is uppercase
import React, { useState } from 'react';
import './App.css';
import './cardLink.css';
import database from './database.json';
import PetCard from './petcard.js';
import SearchBar from './searchbar.js';
import SearchDog from './searchdog.js';
import Header from './header.js';
// import CardForDog from './cardLinkDog';
// import CardForCat from './cardLinkCat';
// import CardForOtherPets from './cardLinkOtherPets';


//Function to display Imaged cards and then open up the search form when clicked on:
function ImageCardDisplay() {
  const [shouldShowSearchDog, setShouldShowSearchDog] = useState(false);
  const [shouldShowImageCardDiv, setShouldShowImageCardDiv] = useState(true);

  const handleSearchFormDisplay = (cardTitle) => {
    if(cardTitle === 'Dogs'){
      //logic to display SearchDog and hide ImageCards
      setShouldShowImageCardDiv(false);
      setShouldShowSearchDog(true);

      console.log("title here:", cardTitle);
      
    }
  }
  //Holds array of image cards, their state, and displays them with the map function:
  const [imageCard, setImageCard] = useState (
    [{
      image: 'dog-svgrepo-com.svg',
      title: 'Dogs',
      id: '1'
    },
    {
      image: 'cat-svgrepo-com.svg',
      title: 'Cats',
      id: '2'
    },
    {
      image: 'paw-2-svgrepo-com.svg',
      title: 'Other Pets',
      id: '3'
    }
  ])
  return(
    <div className='card-search__wrapper'> 
      <div className='card-search__container'>
        {imageCard.map(card => (
          
          <div 
            key={card.id} 
            // Pass card title to the function when clicked on
            onClick={ () => handleSearchFormDisplay(card.title)} 
          >
              <figure>
              <img
                src={`./pet-finder/img/${card.image}`} alt={card.title}
              />
              </figure>
              <p>{card.title}</p>
          </div>
        )) }
      </div> 
    </div> 
  )
}

function App() {
  //Create state variables 
  const [filteredPets, setFilteredPets] = useState(database);
  const [filteredDogs, setFilteredDogs] = useState(database);
  //This state controls card visibility at page load
  const [showPetCard, setShowPetCard] = useState(false);
  const [showDogCard, setShowDogCard] = useState(false);
  const [imageCard, setImageCard] = useState(true);

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

  //test that is is working
  // console.log('Filtered Pets:', filtered);
}

//used for searchdog.js
  const handleDogSearch = (filters) => {
  //This takes in the "filters" the user selected in the searchdog.js form
      const filteredResults = database.filter((pet) => {
        //typeMatch makes sure we are only displaying "dog"
        const typeMatch = filters.type === pet.type;
        const breedMatch = filters.breed === pet.breed || filters.breed === '';
        const ageMatch = filters.age === pet.age || filters.age === '';
        const genderMatch = filters.gender === pet.gender || filters.gender === '';
        const sizeMatch = filters.size === pet.size || filters.size === '';
        //Only return items that match all the above properties:
        return typeMatch && breedMatch && ageMatch && genderMatch && sizeMatch;
        });

    setFilteredDogs(filteredResults);
    setShowDogCard(true);
  }

  return (
    <div>
      <div>
        <div className='header-container'>
          <Header/>
          <SearchBar onSearch={handleSearch}/>
            {/* Conditionally render the PetCard Component */}
            {showPetCard && <PetCard data={filteredPets} />}
        </div>
        <div>
            <SearchDog onClick={handleDogSearch}/>
            {showDogCard && <PetCard data={filteredDogs} />}
        </div>
        <div>
          {/* Section that shows imagecards that when clicked on open form */}
          <ImageCardDisplay/>
        </div>
      </div>
    </div>
  );
}


export default App;
