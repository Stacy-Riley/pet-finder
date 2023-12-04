import React from 'react';
import '../styles/petcard.css';
import database from '../assets/data/database.json';

// const srcValue = `./img/${pet.image}`;
// console.log("srcValue",srcValue);

//Data comes from filteredPets state
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
                <figure>
                <img 
                //images displaying with use of require()
                  src={require(`../assets/images/${pet.image}`)}
                  alt={pet.name}
                  width="200"
                  height="150"   
                />
                </figure>
                
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