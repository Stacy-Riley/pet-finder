import React, { useState } from 'react';
import './searchform.css';

function SearchCat ( { onClick }){
	const [selectedCat, selectedCatSet] = useState('cat');
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
	const handleCatSearch = () => {
		const filters = {
			age: selectedAge,
			breed: selectedBreed,
			gender: selectedGender,
			size: selectedSize,
			type: selectedCat,
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
						<label htmlFor='selectedCat' style={selectElementStyle}></label>
						<select
							name="selectedCat"
							id="selectedCat"
							style={selectElementStyle}
							value={selectedCat}
							onChange={(e) => selectedCatSet(e.target.value)}
						>
							<option value="cat"></option>
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
							<option value="bengal">Bengal</option>
							<option value="calico">Calico</option>
							<option value="domestic long hair">Domestic Long Hair</option>
							<option value="domestic medium hair">Domestic Medium Hair</option>
							<option value="domestic short hair">Domestic Short Hair</option>
							<option value="maine coon">Maine Coon</option>
							<option value="persian">Persian</option>
							<option value="ragdoll">Ragdoll</option>
							<option value="siamese">Siamese</option>
							<option value="tabby">Tabby</option>
							<option value="tiger">Tiger</option>
							<option value="turkish angora">Turkish Angora</option>
							<option value="tuxedo">Tuxedo</option>
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
							<option value="kitten">Kitten</option>
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
							<option value="small">Small (0-7lbs)</option>
							<option value="medium">Medium (8-15lbs)</option>
							<option value="large">Large (15+lbs)</option>
							
						</select>
						</div>
						
						<div className='form-button-container'>
							<button type='button' onClick={handleCatSearch}>Search</button>
						</div>
					</form>
				</div>
			</div>
	)
}

export default SearchCat;