import React, { useState } from 'react';
import './searchbar.css';

function SearchBar( { onSearch }) {
	const[searchTerm, setSearchTerm] = useState('');
	// const [locationValue, setLocationValue] = useState('')

	
	//Sets the state to be the entered data from the user
	const handleInputChange = (e) => {
			setSearchTerm(e.target.value);
		
	}

	// When button is clicked, onSearch function gives the search term that the user typed
	const handleSearch = () => {
		onSearch(searchTerm);
	}
	return (
		<div className='searchbar__wrapper'>
			<div className="searchbar__container">
				<div className='searchbar__container__title'>
					<h1>Find Your New <span>Best Friend</span></h1>
				</div>
				<div className='searchbar__container__form'>
					<form>
						<div>
						{ /*Search animal input field*/ }
						<label htmlFor='searchInput'></label>
						<input 
							id='searchInput' 
							placeholder='Search Terrier, Dog, Cat, etc' 
							type="text" 
							className="searchInput"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						{/* Saving location search for another part of app for now */}
						{/* <select 
							name="searchLocation" 
							id="searchLocation"
							value={locationValue}
							onChange={(e) => setLocationValue(e.target.value)}
						>
							<option value="">--Please choose an option--</option>
							<option value="Quito">Quito</option>
							<option value="Cuenca">Cuenca</option>
							<option value="Guayaquil">Guayaquil</option>
						</select> */}
						</div>
						<div className='searchbar__container__form__button'>
							<button type='button' onClick={handleSearch}>Search</button>
						
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SearchBar;