import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; //library to generate unique keys 
import '../styles/searchform.css';
import database from '../assets/data/database.json';
import PetCard from './PetCard';

function SearchOther (){
	const [showOtherCard, setShowOtherCard] = useState(false);
	const [userInteracted, setUserInteracted] = useState(false);
	const [filteredOther, setFilteredOther] = useState(database);
	const [showNotAvailCard, setShowNotAvailCard] = useState(false);

	//Collects the state of all the form elements
	const [filters, setFilters] = useState({
		age: '',
		breed: '',
		gender: '',
		size: '',
		type: 'other',
	});

	//Triggered when the search button in the form is clicked 
	//Passes "filters" state to the 'onClick' function provided as a prop
	const handleOtherSearch = ({onClick}) => {
		// console.log("Filters", filters)
		
// 	//This takes in the "filters" state the user selected in the SearthOther.js form
// 	//filters the keys of the filters object and if == '' or key, returns true and displays
		const filteredResults = database.filter((pet) => {	
		return Object.keys(filters).every(key=>{
		  return filters[key]===""|| pet[key]===filters[key]
		})
	
	 });
	 setFilteredOther(filteredResults);

	 //If the array is empty, it changes the state to true so the message can appear
	 if(filteredResults.length === 0){
		setShowNotAvailCard(true);
	 } 
	 else {
		setShowNotAvailCard(false);
	 }
	 setShowOtherCard(true);
	 setUserInteracted(true);
	}
//Updates the state of filters and userInteracted if userInteracted is true
	useEffect(() => {
		if(userInteracted){
		}
		
	}, [filters, userInteracted])

/*
Removes the user selected inputs from screen under search button
Object.entries converts the properties of the filters object into an array 
of key-value pairs. Then, it maps over these pairs using map.
*/
const handleClose = (valueToRemove) => {
	setUserInteracted(true);
	const updatedSearchTerms = Object.fromEntries(
	  Object.entries(filters).map(([key, value]) => [
		key, value === valueToRemove ? '' : value,
	  ])
	);
	setFilters(updatedSearchTerms);

	//This removes the "not available" message
	if(setShowNotAvailCard){
		setShowNotAvailCard(false);
	}
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
					{/* Selected other as type - not to be displayed on screen
					static value inside of filters state under type: 'other' */}
					
					<label htmlFor='selectedBreed'>Breed</label>

					<select 
						name="selectedBreed" 
						id="selectedBreed"
						value={filters.breed}
						onChange={(e) => setFilters({
							...filters,
							breed: e.target.value
						})}
					>
						<option value="">Any</option>
						<option value="bunny">Bunny</option>
						<option value="guinea pig">Guinea Pig</option>
						<option value="hamster">Hamster</option>
						<option value="snake">Snake</option>
					</select>
					
					{ /*Select age field*/ }
					<label htmlFor='selectedAge'>Age</label>
					
					<select 
						name="selectedAge" 
						id="selectedAge"
						value={filters.age}
						onChange={(e) => setFilters({
							...filters,
							age: e.target.value
						})}
					>
						<option value="">Any</option>
						<option value="young">Young</option>
						<option value="adult">Adult</option>
					</select>
					
					{ /*Select gender field*/ }
					<label htmlFor='selectedGender'>Gender</label>
					
					<select 
						name="selectedGender" 
						id="selectedGender"
						value={filters.gender}
						onChange={(e) => setFilters({
							...filters,
							gender: e.target.value
						})}
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
						value={filters.size}
						onChange={(e) => setFilters({
							...filters,
							size: e.target.value
						})}
					>
						<option value="">Any</option>
						<option value="small">Small (0-5lbs)</option>
						<option value="medium">Medium (5-10lbs)</option>
						<option value="large">Large (10+lbs)</option>
					</select>
					</div>
					
					<div className='form-button-container'>
						<button type='button' onClick={handleOtherSearch}>Search</button>
					</div>
					{/* Map over the user selected inputs and display on the screen */}
					
				</form>

				<div className='#'>
					{Object.entries(filters).map(([key, value]) => (
						
						//gave each term a unique key by importing from library uuid
						//if there is a value of '', it won't display anything
						//below the search button
						value !== '' && value !== 'other' ?
						(<div key={uuidv4()}>
							<button  
							onClick={()=> handleClose(value)}
							style={buttonSpacing}>x</button>
							{value}
						</div>) : null
					))}
				</div>
				{showNotAvailCard && 
					<div>
						<p>Sorry, nobody is available right now. Check back soon!</p>
					</div>}
				<div>
					{showOtherCard && <PetCard data={filteredOther}/>}
				</div>
			</div>
		</div>
	)

}

export default SearchOther;