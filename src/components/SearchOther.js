import React, { useState} from 'react';
import '../styles/searchform.css';

function SearchOther ( { onClick }){
	const [selectedOther, selectedOtherSet] = useState('other');
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
	const handleOtherSearch = () => {
		const filters = {
			age: selectedAge,
			breed: selectedBreed,
			gender: selectedGender,
			size: selectedSize,
			type: selectedOther,
		  };

		onClick(filters);
	
	// Reset the form after submitting so it keeps working:
	resetForm();
	}

	return (
			<div className='search-wrapper'>
				<div className='search-container'>
					<form>
						<div className='form-title-container'>
							<h2>Find Your Best Match</h2>
							<p>It only takes 60 seconds!</p>
						</div>
						<div className='form-input-container'>
						{/* Selected dog as type - not to be displayed on screen */}
						<label htmlFor='selectedOther' style={selectElementStyle}></label>
						<select
							name="selectedOther"
							id="selectedOther"
							style={selectElementStyle}
							value={selectedOther}
							onChange={(e) => selectedOtherSet(e.target.value)}
						>
							<option value="other"></option>
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
							<option value="birds">Birds</option>
							<option value="hourses">Horses</option>
							<option value="scales, fins, and other">Scales, Fins, and Other</option>
							<option value="small and furry">Small and Furry</option>
							<option value="rabbits">Rabbits</option>							
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
							<option value="small">Small (0-10lbs)</option>
							<option value="medium">Medium (10-25lbs)</option>
							<option value="large">Large (25-80lbs)</option>
							<option value="xlarge">Extra Large (80lbs or more)</option>
						</select>
						</div>
						
						<div className='form-button-container'>
							<button type='button' onClick={handleOtherSearch}>Search</button>
						</div>
					</form>
				</div>
			</div>
	)
}

export default SearchOther;