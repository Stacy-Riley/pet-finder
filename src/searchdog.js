//npm start
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; //library to generate unique keys 
import './searchform.css';


function SearchDog ( { onClick }){
	// const [selectedDog, selectedDogSet] = useState('dog'); //[] destructures
	const [selectedAge, selectedAgeSet] = useState('');
	const [selectedBreed, selectedBreedSet] = useState('');
	const [selectedGender, selectedGenderSet] = useState('');
	const [selectedSize, selectedSizeSet] = useState('');
	const [showDogCard, setShowDogCard] = useState(false);

	const [filters, setFilters] = useState({
		age: selectedAge,
		breed: selectedBreed,
		gender: selectedGender,
		size: selectedSize,
		type: 'dog',
	});
	

	// Selected dog as type - not to be displayed on screen
	const selectElementStyle = {
		display: 'none',
	}
	
	const buttonSpacing = {
		margin: '0 5px 10px 0',
		// background: 'none',
	}
	
	//Triggered when the search button is clicked and collects
	//the selected filter values, creates a 'filters' object and
	//passes it to the 'onClick' function provided as a prop:
	const handleDogSearch = () => {
		// const filters = {
		// 	age: selectedAge,
		// 	breed: selectedBreed,
		// 	gender: selectedGender,
		// 	size: selectedSize,
		// 	type: selectedDog,
		//   };
	
		
console.log("filters from SearchDog", filters)
// console.log('searchTerms list:', searchTerms)

	// console.log("filters in handleDogSearch - component", filters)  
	// console.log("filters type:", filters.type)
	onClick(filters);
		  

		
	}

//Removes the user selected inputs from screen under search button
	const handleRemoveSearchTerm = (valueToRemove) => {
		// const updatedSearchTerms = filters.filter(function(value) {
		// 	//not equal in value and type
		// 	if(value !== valueToRemove){
		// 		return true; // Include the element in the filtered array because there wasn't a match
		// 	} else {
		// 		return false; // Exclude the element in the filtered array because there was a match
		// 	}

		// });
		// setFilters(updatedSearchTerms);
		// console.log("Updated Search Terms from updatedSearchTerms", updatedSearchTerms)
	}


	//Update filters whenever any of the individual state variables change
	useEffect(() => {
		setFilters({
		  age: selectedAge,
		  breed: selectedBreed,
		  gender: selectedGender,
		  size: selectedSize,
		  type: 'dog',
		});
	  }, [selectedAge, selectedBreed, selectedGender, selectedSize, 'dog']);

	return (
			<div className='search-wrapper'>
				<div className='search-container'>
					<form>
						<div className='form-title-container'>
							<h2>Look For Your Best Match</h2>
							<p>It only takes 60 seconds!</p>
						</div>
						<div className='form-input-container'>
						{/* Selected dog as type - not to be displayed on screen */}
						<label htmlFor='selectedDog' 
						// style={selectElementStyle}
						>

						</label>
						{/* <select
							name="selectedDog"
							id="selectedDog"
							style={selectElementStyle}
							defaultValue={selectedDog}
							// onChange={(e) => selectedDogSet(e.target.value)}
						>
							{/* <option value="dog"></option> */}
						{/* </select> } */}
						{ /*Select breed field*/ }
						<label htmlFor='selectedBreed'>Breed</label>
						
						<select 
							name="selectedBreed" 
							id="selectedBreed"
							value={selectedBreed}
							onChange={(e) => selectedBreedSet(e.target.value)}
						>
							<option value="any">Any</option>
							<option value="chihuahua">Chihuahua</option>
							<option value="german shepherd">German Shepherd</option>
							<option value="shih tzu">Shit Tzu</option>
							<option value="terrier">Terrier</option>
						</select>
						
						{ /*Select age field*/ }
						<label htmlFor='selectedAge'>Age</label>
						
						<select 
							name="selectedAge" 
							id="selectedAge"
							value={selectedAge}
							onChange={(e) => selectedAgeSet(e.target.value)}
						>
							<option value="any">Any</option>
							<option value="puppy">Puppy</option>
							<option value="young">Young</option>
							<option value="adult">Adult</option>
						</select>
						
						{ /*Select gender field*/ }
						<label htmlFor='selectedGender'>Gender</label>
						
						<select 
							name="selectedGender" 
							id="selectedGender"
							value={selectedGender}
							onChange={(e) => selectedGenderSet(e.target.value)}
						>
							<option value="any">Any</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
						
						{ /*Select size field*/ }
						<label htmlFor='selectedSize'>Size</label>
						
						<select 
							name="selectedSize" 
							id="selectedSize"
							value={selectedSize}
							onChange={(e) => selectedSizeSet(e.target.value)}
						>
							<option value="any">Any</option>
							<option value="small">Small (0-25lbs)</option>
							<option value="medium">Medium (26-60lbs)</option>
							<option value="large">Large (61-100lbs)</option>
							<option value="xlarge">Extra Large (101lbs or more)</option>
						</select>
						</div>
						
						<div className='form-button-container'>
							<button type='button' onClick={handleDogSearch}>Search</button>
						</div>
						{/* Map over the user selected inputs and display on the screen */}
							{/* <div>
								{Object.entries(filters).map(([key, value]) => (
									
									//gave each term a unique key by importing from library uuid
									//if there is a value of '', it won't display anything
									//below the search button
									value !== '' ?
									(<div key={uuidv4()}>
										<button onClick={()=> handleRemoveSearchTerm(value)} style={buttonSpacing}>x</button>
										{value}
									</div>) : null
								))}
							</div> */}
					</form>
				</div>
			</div>
	)
}

export default SearchDog;