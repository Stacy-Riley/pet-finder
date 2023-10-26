//constructor function is uppercase
import React, { useState } from 'react';
import './App.css';
import './cardLink.css';
import database from './database.json';
import PetCard from './petcard.js';
import SearchBar from './searchbar.js';
import SearchDog from './searchdog.js';
import SearchCat from './searchcat.js';
import SearchOther from './searchother.js';
import Header from './header.js';



//Function to display Imaged cards and then open up the search form when clicked on:
function ImageCardDisplay({ onImageClick }) {
  const [shouldShowSearchDog, setShouldShowSearchDog] = useState(false);
  const [shouldShowSearchCat, setShouldShowSearchCat] = useState(false);
  const [shouldShowSearchOther, setShouldShowSearchOther] = useState(false);
  const [shouldShowImageCardDiv, setShouldShowImageCardDiv] = useState(true);
  const [filteredDogs, setFilteredDogs] = useState(database);
  const [filteredCats, setFilteredCats] = useState(database);
  const [filteredOther, setFilteredOther] = useState(database);
  const [showDogCard, setShowDogCard] = useState(false);
  const [showCatCard, setShowCatCard] = useState(false);
  const [showOtherCard, setShowOtherCard] = useState(false);
  const [filteredPets, setFilteredPets] = useState(database);


  //Checks which card the user clicked on and sets state to display proper form
  const handleSearchFormDisplay = (cardTitle) => {
    if(cardTitle === 'Dogs'){
      //logic to display SearchDog and hide ImageCards
      setShouldShowImageCardDiv(false);
      setShouldShowSearchDog(true);
      //logic to display SearchCat and hide ImageCards
    } else if (cardTitle === 'Cats') {
      setShouldShowImageCardDiv(false);
      setShouldShowSearchCat(true);
      //logic to display SearchOther and hide ImageCards
    } else if (cardTitle === 'Other Pets') {
      setShouldShowImageCardDiv(false);
      setShouldShowSearchOther(true);
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

//used for searchcat.js
const handleCatSearch = (filters) => {
  //This takes in the "filters" the user selected in the searchdcat.js form
      const filteredResults = database.filter((pet) => {
        //typeMatch makes sure we are only displaying "cat"
        const typeMatch = filters.type === pet.type;
        const breedMatch = filters.breed === pet.breed || filters.breed === '';
        const ageMatch = filters.age === pet.age || filters.age === '';
        const genderMatch = filters.gender === pet.gender || filters.gender === '';
        const sizeMatch = filters.size === pet.size || filters.size === '';
        //Only return items that match all the above properties:
        return typeMatch && breedMatch && ageMatch && genderMatch && sizeMatch;
        });

    setFilteredCats(filteredResults);
    setShowCatCard(true);
    
}

//used for searchother.js
const handleOtherSearch = (filters) => {
  //This takes in the "filters" the user selected in the searchdcat.js form
      const filteredResults = database.filter((pet) => {
        //typeMatch makes sure we are only displaying "other"
        const typeMatch = filters.type === pet.type;
        const breedMatch = filters.breed === pet.breed || filters.breed === '';
        const ageMatch = filters.age === pet.age || filters.age === '';
        const genderMatch = filters.gender === pet.gender || filters.gender === '';
        const sizeMatch = filters.size === pet.size || filters.size === '';
        //Only return items that match all the above properties:
        return typeMatch && breedMatch && ageMatch && genderMatch && sizeMatch;
        });

    setFilteredOther(filteredResults);
    setShowOtherCard(true);
}


  return(
    <div className='card-search__wrapper'> 
      <div className='card-search__container' onClick={onImageClick}>
        {/* When page loads it is true */}
        {shouldShowImageCardDiv && imageCard.map((card) => (  
          <div 
            key={card.id} 
            // Pass card title to the function when clicked on
            onClick={ () => handleSearchFormDisplay(card.title)} 
          >
              <figure>
                <img
                  src={`./img/${card.image}`} alt={card.title}
                />
              </figure>
              <p>{card.title}</p>
          </div>
        ))}
      </div> 
      {/* Render SearchDog, SearchCat, & SearchOther components - 
      Must have seperate div than map div */}   
      <div>
        {shouldShowSearchDog && <SearchDog onClick={handleDogSearch}/>} 
        {showDogCard && <PetCard data={filteredDogs} />}
      </div>
      <div>
        {shouldShowSearchCat && <SearchCat onClick={handleCatSearch}/>} 
        {showCatCard && <PetCard data={filteredCats} />}
      </div>
      <div>
        {shouldShowSearchOther && <SearchOther onClick={handleOtherSearch}/>} 
        {showOtherCard && <PetCard data={filteredOther} />}
      </div>
    </div> 
  )
}

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
      <div>
        <div className='header-container'>
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
