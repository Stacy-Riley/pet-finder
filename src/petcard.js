import React from 'react';
import './petcard.css';

function PetCard ({ data }) {
    return (
      <div className='pet-card-container'>
        {data.map(function(pet){
          return (
            <div className='pet-card' key={pet.id}>
              <img 
              //images are not displaying
                src={`./img${pet.image}`} 
                alt={pet.name}
                width="200"
                height="150"   
              />
              <h2>{pet.name}</h2>
              {/* 
              Save for later
              <p>{pet.breed}</p>
              <p>{pet.gender}</p>
              <p>{pet.age}</p>
              <p>{pet.location}</p>
              <p>{pet.notes}</p> */}
            </div>
          )
        })}      
      </div> 
    );
}

export default PetCard;