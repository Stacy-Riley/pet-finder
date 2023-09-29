//npm start
import React, { useState } from 'react';
import './searchdog.css';

function SearchDog ( { onClick }){
	const [selectedDog, selectedDogSet] = useState('dog');
	const [selectedAge, selectedAgeSet] = useState('');
	const [selectedBreed, selectedBreedSet] = useState('');
	const [selectedGender, selectedGenderSet] = useState('');
	const [selectedSize, selectedSizeSet] = useState('');
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

	//Event listener of sorts that sets the state to be the entered data from the user
	//Uses the name from the form element to determine which state variable to update:
	const handleChange = (e) => {
		const {name, value} = e.target;

		switch (name) {
			case "selectedAge":
				//if the value === "any", empty the value/reset the value 
				//to empty string, otherwise set the value to the state of the selected item
				selectedAgeSet(value === "any" ? "" : value);
				break;
			case "selectedBreed":
				selectedBreedSet(value === "any" ? "" : value);
				break;
			case "selectedGender":
				selectedGenderSet(value === "any" ? "" : value);
				break;
			case "selectedSize":
				selectedSizeSet(value === "any" ? "" : value);
				break;
			default:
				break;
		}
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

		onClick(filters);
	
	// Reset the form after submitting so it keeps working:
	resetForm();
	}

	return (
			<div className='search-dog-wrapper'>
				<div className='search-dog-container'>
					<form>
						<div>
							<h2>Find Your Best Match</h2>
							<p>It only takes 60 seconds!</p>
						</div>
						<div>
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
						<br/>
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
						<br/>
						{ /*Select age field*/ }
						<label htmlFor='selectedAge'>Age</label>
						<br/>
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
							<option value="senior">Senior</option>
						</select>
						<br/>
						{ /*Select gender field*/ }
						<label htmlFor='selectedGender'>Gender</label>
						<br/>
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
						<br/>
						{ /*Select size field*/ }
						<label htmlFor='selectedSize'>Size</label>
						<br/>
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
						<br/>
						<div>
							<button type='button' onClick={handleDogSearch}>Search</button>
						</div>
					</form>
				</div>
			</div>
	)
}

export default SearchDog;