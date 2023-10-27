//npm start
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; //library to generate unique keys 
import './searchform.css';

function SearchDog ( { onClick }){
	const [selectedDog, selectedDogSet] = useState('dog');
	const [selectedAge, selectedAgeSet] = useState('');
	const [selectedBreed, selectedBreedSet] = useState('');
	const [selectedGender, selectedGenderSet] = useState('');
	const [selectedSize, selectedSizeSet] = useState('');
	const [showDogCard, setShowDogCard] = useState('');
	const [searchTerms, setSearchTerms] = useState([]);
	//add more filter features here

	//resets state of inputs but I don't know how to keep the inputs
	//the user selected on the form still.
	const resetForm = () => {
		selectedAgeSet('');
		selectedBreedSet('');
		selectedGenderSet('');
		selectedSizeSet('');
	}
	

	// Selected dog as type - not to be displayed on screen
	const selectElementStyle = {
		display: 'none',
	}
	 

	//Triggered when the search button is clicked and collects
	//the selected filter values, creates a 'filters' object and
	//passes it to the 'onClick' function provided as a prop:
	const handleDogSearch = () => {
		const filters = {
			age: selectedAge,
			breed: selectedBreed,
			gender: selectedGender,
			size: selectedSize,
			type: selectedDog,
		  };
// console.log("filters from SearchDog", filters)
		  onClick(filters);
		  
		  
	//The non-empty filters are added to the searchTerms state, to be displayed on screen
	//!!value syntax is a way to convert the value to a boolean. It turns any truthy value into true and any falsy value into false. So, this part filters out any empty or falsy values from the array.	
	//"Object.values" pulls the value from the filters object
	//".filter" method creates a new array of only non-empty values
	const nonEmptyFilters = Object.values(filters).filter(function(value) {
		if (value !== '') {
			return value;
		}
	 });

		setSearchTerms(nonEmptyFilters);
		
	// Reset the form after submitting so it keeps working:
	resetForm();
	}

//Removes the user selected inputs from screen under search button
	const handleRemoveSearchTerm = (termToRemove) => {
		const updatedSearchTerms = searchTerms.filter(function(term) {
			//not equal in value and type
			if(term !== termToRemove){
				return true; // Include the element in the filtered array because there wasn't a match
			} else {
				return false; // Exclude the element in the filtered array because there was a match
			}

		});
console.log("Updated Search Terms from searchdog component", updatedSearchTerms)
		setSearchTerms(updatedSearchTerms);
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
						{/* Selected dog as type - not to be displayed on screen */}
						<label htmlFor='selectedDog' style={selectElementStyle}></label>
						<select
							name="selectedDog"
							id="selectedDog"
							style={selectElementStyle}
							value={selectedDog}
							onChange={(e) => selectedDogSet(e.target.value)}
						>
							<option value="dog"></option>
						</select>
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
						<div>
							{searchTerms.map((term) => (
								//gave each term a unique key by importing from library uuid
								<div key={uuidv4()}>
									<button onClick={()=> handleRemoveSearchTerm(term)}> x </button>
									{term}
								</div>
							))}
						</div>
					</form>
				</div>
			</div>
	)
}

export default SearchDog;