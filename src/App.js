//constructor function is uppercase
import React, { useState } from 'react';
import './App.css';
import database from './database.json';

function App() {
  //Create state variables to store the input values
  const [searchValue, setSearchValue] = useState('');
  const [locationValue, setLocationValue] = useState('');

//Move this outside of App() for better performance?
  const handleSubmit = (e) => {
    e.preventDefault()

    //This is the search and location values from state
    console.log('Search Value:', searchValue);
    console.log('Location Value:', locationValue);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          { /*Search animal input field*/ }
          <label htmlFor='searchInput'></label>
          <input 
            id='searchInput' 
            placeholder='Search dog, cat, etc' 
            type="text" 
            className="searchInput"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          { /*Search location input field*/ }
          <label htmlFor='searchLocation'></label>
          {/* <input 
            id='searchLocation' 
            placeholder='Enter City Name' 
            type="text" 
            className="searchLocation"
            value={locationValue}
            onChange={(e) => setLocationValue(e.target.value)}
          /> */}
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
          <button type='submit'>Enter</button>
        </div>
      </form>

      <div className='header-content-container'>
        <h1>Find Your New Best Friend</h1>
        <p>Browse pets from our network of selters and rescues</p>
      </div>
      <div>
        {database.map(function(pet){
          return (
            <div className='pet-card' key={pet.id}>
              <img 
              //neither are working here-images not displaying
                src={`./img/${pet.image}`}
                //src="./img/{pet.image}" 
                alt={pet.name}
                width="200"
                height="150"   
              />
              <h2>{pet.name}</h2>
              <p>{pet.breed}</p>
              <p>{pet.gender}</p>
              <p>{pet.age}</p>
              <p>{pet.location}</p>
              <p>{pet.notes}</p>
            </div> 
          )
          
        })}
      </div>
    </div>
  );
}

export default App;
