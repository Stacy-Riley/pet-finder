import React, { useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import '../styles/searchbar.css';

function SearchBar( { isVisible, onSearch }) {
	const[searchTerm, setSearchTerm] = useState('');
	const [searchLocation, setSearchLocation] = useState('')

	
	//Sets the state to be the entered data from the user
	const handleInputChange = (e) => {
			setSearchTerm(e.target.value);
		
	}

	// When button is clicked, onSearch function gives the search term that the user typed
	const handleSearch = (e) => {
		e.preventDefault();
		onSearch(searchTerm);
	}
	return (
		<div className='searchbar__wrapper' style={{ display: isVisible ? "block" : "none" }}>
			<div className="searchbar__container">
				<div className='searchbar__container__title'>
					<h1>Find Your New <span>Best Friend</span></h1>
				</div>
				<div className='searchbar__container__form'>
					<form onSubmit={handleSearch}>
						<div className='searchbar__form__container'>
							{ /*Search animal input field*/ }
							<label htmlFor='searchInput'></label>
							<input 
								id='searchInput' 
								placeholder='Search Terrier, Dog, Cat, etc' 
								type="text" 
								className='searchInput'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
		
							<label htmlFor='searchLocation'><span className='searchDivide'>|</span></label>
							<input
								id='searchLocation'
								placeholder='City, State'
								type='text'
								className='searchLocation'
								value={searchLocation}
								onChange={(e) => setSearchLocation(e.target.value)}
							/>
									{/* Saving location search for another part of app for now  */}
									{/* <select 
										name="searchLocation" 
										id="searchLocation"
										value={locationValue}
										onChange={(e) => setLocationValue(e.target.value)}
									>
										<option>--Choose a City--</option>
										<option value="">Any</option>
										<option value="Quito">Quito</option>
										<option value="Cuenca">Cuenca</option>
										<option value="Guayaquil">Guayaquil</option>
									</select> */}
						</div>
							<div className='searchbar__container__form__button'>
								<button type='submit'><BiSearchAlt /></button>
							</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SearchBar;