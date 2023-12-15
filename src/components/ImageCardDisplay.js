import React, {useState} from "react";
import { Link } from 'react-router-dom';
import PetCard from './PetCard.js';
import SearchOther from './SearchOther.js';
import database from '../assets/data/database.json'
import imagesData from "../assets/data/cardData.js";
//Function to display Imaged cards and then open up the search form when clicked on:
// onImageClick -previous parameter
function ImageCardDisplay({  }) {
	// const [shouldShowSearchDog, setShouldShowSearchDog] = useState(false);
	// const [shouldShowSearchCat, setShouldShowSearchCat] = useState(false);
	// const [shouldShowSearchOther, setShouldShowSearchOther] = useState(false);
	// const [shouldShowImageCardDiv, setShouldShowImageCardDiv] = useState(true);
	// const [filteredDogs, setFilteredDogs] = useState(database);
	// const [filteredCats, setFilteredCats] = useState(database);
	// const [filteredOther, setFilteredOther] = useState(database);
	// const [showDogCard, setShowDogCard] = useState(false);
	// const [showCatCard, setShowCatCard] = useState(false);
	// const [showOtherCard, setShowOtherCard] = useState(false);
	// const [filteredPets, setFilteredPets] = useState(database);
  
  
	//Checks which card the user clicked on and sets state to display proper form
	// const handleSearchFormDisplay = (cardTitle) => {
	//   if(cardTitle === 'Dogs'){
	// 	//logic to display SearchDog and hide ImageCards
	// 	setShouldShowImageCardDiv(false);
	// 	setShouldShowSearchDog(true);
	// 	//logic to display SearchCat and hide ImageCards
	//   } else if (cardTitle === 'Cats') {
	// 	setShouldShowImageCardDiv(false);
	// 	setShouldShowSearchCat(true);
	// 	//logic to display SearchOther and hide ImageCards
	//   } else if (cardTitle === 'Other Pets') {
	// 	setShouldShowImageCardDiv(false);
	// 	setShouldShowSearchOther(true);
	//   }
	  
	// }
  
   
  //used for searchdog.js - receives parameter of filters object from searchdog.js
//   const handleDogSearch = (filters) => {
   
// 	//This takes in the "filters" the user selected in the searchdog.js form
// 	//filters the keys of the filters object and if == '' or key, returns true and displays
// 		const filteredResults = database.filter((pet) => {
// 		return Object.keys(filters).every(key=>{
// 		  return filters[key]===""|| pet[key]===filters[key]
// 		})
		 
// 	 });
  
// 	  setFilteredDogs(filteredResults);
// 	  setShowDogCard(true);
// 	}
  

	return(
	  <div className='card-search__wrapper'> 
		<div className='card-search__container' 
		// onClick={onImageClick}
		>
		  {/* When page loads it is true */}
		  
		  {/* shouldShowImageCardDiv && was with imagesData.map */}
			{imagesData.map((card) => (  
				
				<Link key = {card.id} to={`/search/${card.component}`} style={{textDecoration: 'none'}}>
					<div key={card.id} className="card">
						<figure>
							<img src={require(`../assets/icons/${card.image}`)} alt={card.title}/>
						</figure>
						<p>{card.title}</p>
					</div>
				</Link>
			))}
		 
		</div> 
		{/* Render SearchDog, SearchCat, & SearchOther components - 
		Must have seperate div than map div */}   
		<div>
		  {/* {shouldShowSearchDog && <SearchDog onClick={handleDogSearch}/>}  */}
		  {/* {showDogCard && <PetCard data={filteredDogs} />} */}
		</div>
		<div>
		  {/* {shouldShowSearchCat && <SearchCat onClick={handleCatSearch}/>}  */}
		  {/* {showCatCard && <PetCard data={filteredCats} />} */}
		</div>
		<div>
		  {/* {shouldShowSearchOther && <SearchOther onClick={handleOtherSearch}/>}  */}
		  {/* {showOtherCard && <PetCard data={filteredOther} />} */}
		</div>
	  </div> 
	)
  }


  export default ImageCardDisplay