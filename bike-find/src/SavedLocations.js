import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './SavedLocations.css';
import SavedLocationsCard from './SavedLocationsCard';

export default function SavedLocations({savedLocations, deleteCard}) {

 console.log("SAVED LOCATIONS", savedLocations);
    if (!savedLocations.length) {
      return <h2> You haven't saved any locations</h2>
    }
    
  let theAddresses = savedLocations.map(location => {
    let id = location.id
  
      return (
        <div className="saved-locations-card" key={location.id}>
          <NavLink to={`/${location.id}`} key={location.id}>
            <p>{location.extra.address}</p>
          </NavLink>
          <div className='delete-button-container'>
            <button className="delete-button" onClick={() => deleteCard(id)}>✖️</button>
          </div>
          <SavedLocationsCard addresses={location.extra.address} />
        </div>
      );
  })

  return (
    <section>
      <h1>Saved Locations</h1>
      <div className="card-container">{theAddresses}</div>
    </section>
  );
}

