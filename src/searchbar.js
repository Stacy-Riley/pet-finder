import React, { useState } from 'react';

function SearchBar( { onSearch }) {
	const[searchTerm, setSearchTerm] = useState('');
	const [locationValue, setLocationValue] = useState('')

	//Sets the state to be the entered data from the user
	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
	}

	// When button is clicked, onSearch function gives the search term that the user typed
	const handleSearch = () => {
		onSearch(searchTerm);
	}
	return (
	<div className="form-container">
		<form>
			<div>
			{ /*Search animal input field*/ }
			<label htmlFor='searchInput'></label>
			<input 
				id='searchInput' 
				placeholder='Search dog, cat, etc' 
				type="text" 
				className="searchInput"
				value={searchTerm}
				onChange={handleInputChange}
			/>
			
			<select 
				name="searchLocation" 
				id="searchLocation"
				value={locationValue}
				onChange={(e) => setLocationValue(e.target.value)}
			>
				<option value="">--Please choose an option--</option>
				<option value="Quito">Quito</option>
				<option value="Cuenca">Cuenca</option>
				<option value="Guayaquil">Guayaquil</option>
			</select>

			</div>
			<div>
				<button type='button' onClick={handleSearch}>Search</button>
			</div>
      </form>
    </div>
	)
}

export default SearchBar;