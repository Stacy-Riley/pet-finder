import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; //library to generate unique keys 
import './searchform.css';


function SearchDog ( { onClick }){
	const [selectedAge, selectedAgeSet] = useState('');
	const [selectedBreed, selectedBreedSet] = useState('');
	const [selectedGender, selectedGenderSet] = useState('');
	const [selectedSize, selectedSizeSet] = useState('');
	const [showDogCard, setShowDogCard] = useState(false);

	//Collects the state of all the form elements
	const [filters, setFilters] = useState({
		age: selectedAge,
		breed: selectedBreed,
		gender: selectedGender,
		size: selectedSize,
		type: 'dog',
	});

	//Updates filters whenever any of the individual state variables change
	useEffect(() => {
		setFilters({
		  age: selectedAge,
		  breed: selectedBreed,
		  gender: selectedGender,
		  size: selectedSize,
		  type: 'dog',
		});
	  }, [selectedAge, selectedBreed, selectedGender, selectedSize, 'dog']);

	
	//Triggered when the search button is clicked 
	//passes filters to the 'onClick' function provided as a prop to App.js:
	const handleDogSearch = () => {
		
		onClick(filters);
		  
	}

// //Removes the user selected inputs from screen under search button
// 	const handleRemoveSearchTerm = (valueToRemove) => {
// 		const filterNew = Object.values(filters)
// 		const updatedSearchTerms = filterNew.filter(function(value) {
// 		// 	//not equal in value and type
// 			if(value !== valueToRemove){
// 				return true; // Include the element in the filtered array because there wasn't a match
// 			} else {
// 				return false; // Exclude the element in the filtered array because there was a match
// 			}

// 		});
// 		setFilters(updatedSearchTerms);
// 		console.log("Updated Search Terms from updatedSearchTerms", updatedSearchTerms)
// 	}

// //Removes the user selected inputs from screen under search button
const handleRemoveSearchTerm = (valueToRemove) => {
	const updatedSearchTerms = Object.fromEntries(
	  Object.entries(filters).map(([key, value]) => [
		key,
		value === valueToRemove ? '' : value,
	  ])
	);
  
	setFilters(updatedSearchTerms);
	console.log("Updated Search Terms:", updatedSearchTerms);
  };
  
//Button style for handleRemoveSearchTerm
  const buttonSpacing = {
	margin: '0 5px 10px 0',
	// background: 'none',
	}

	return (
			<div className='search-wrapper'>
				<div className='search-container'>
					<form>
						<div className='form-title-container'>
							<h2>Look For Your Best Match</h2>
							<p>It only takes 60 seconds!</p>
						</div>
						<div className='form-input-container'>
						{/* Selected dog as type - not to be displayed on screen
						static value inside of filters state under type: 'dog' */}
						
						<label htmlFor='selectedBreed'>Breed</label>

						<select 
							name="selectedBreed" 
							id="selectedBreed"
							value={selectedBreed}
							onChange={(e) => selectedBreedSet(e.target.value)}
						>
							<option value="">Any</option>
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
							<option value="">Any</option>
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
							<option value="">Any</option>
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
							<option value="">Any</option>
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
						
					</form>
					<div>
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
							</div>
				</div>
			</div>
	)
}

export default SearchDog;