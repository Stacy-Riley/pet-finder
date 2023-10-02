import React from 'react';
import './petcard.css';
import database from './database.json';

// const srcValue = `./img/${pet.image}`;
// console.log("srcValue",srcValue);

function PetCard ({ data }) {
  
  
  // {{ srcValue }} 
  // Print srcValue to the console
    return (
      <div className='pet-card-wrapper'>
        <div className='pet-card-container'>
          {data.map(function(pet){
            // const srcValue = `./img/${pet.image}`;
            return (
              <div className='pet-card' key={pet.id}>
                <img 
                //images are not displaying
                  src={`./pet-finder/img/${pet.image}`} 
                  alt={pet.name}
                  width="200"
                  height="150"   
                />
                <h2>{pet.name}</h2>
                <p>Breed: {pet.breed}</p>
                <p>Gender: {pet.gender}</p>
                <p>Age: {pet.age}</p>
                <p>Location: {pet.location}</p>
                <p>Notes: <br/>{pet.notes}</p>
              </div>
            )
          })}      
        </div> 
      </div>
    );
}

export default PetCard;