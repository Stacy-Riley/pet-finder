import React, { useState } from 'react';

function SearchDog ( { onClick }){

	const [ageValue, ageValueSet] = useState('');
	const [genderValue, genderValueSet] = useState('');

	//Sets the state to be the entered data from the user
	const handleChange = (e) => {
		ageValueSet(e.target.value);
	}
	//When search is clicked the new state is recorded:
	const handleDogSearch = () => {
		onClick(ageValue);
		
		// genderValueSet(e.target.value);
	}

	return (
		<div>
			<div>
				<div className='left-aside-wrapper'>
					<div className='left-aside-container'>
						<form>
							<div>
								<h2>Find Your Best Match</h2>
								<p>It only takes 60 seconds!</p>
							</div>
							<div>
							{ /*Search animal input field*/ }
							<label htmlFor='ageSelect'>AGE</label>
							<br/>
							<select 
								name="ageSelect" 
								id="ageSelect"
								value={ageValue}
								onChange={(e) => ageValueSet(e.target.value)}
							>
								<option value="any">Any</option>
								<option value="puppy">Puppy</option>
								<option value="young">Young</option>
								<option value="adult">Adult</option>
								<option value="senior">Senior</option>
							</select>
							<br/>
							<label htmlFor='genderSelect'>Gender</label>
							<br/>
							<select 
								name="genderSelect" 
								id="genderSelect"
								value={genderValue}
								onChange={(e) => genderValueSet(e.target.value)}
							>
								<option value="any">Any</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
							</div>
							<br/>
							<div>
								<button type='button' onClick={handleDogSearch}>Search</button>
							</div>
						</form>
					</div>
				</div>
				<div className='main-content-wrapper'>

				</div>
			</div>
		</div>
	)
}

export default SearchDog;