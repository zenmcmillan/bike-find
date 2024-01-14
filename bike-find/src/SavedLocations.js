import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './SavedLocations.css';
import SavedLocationsCard from './SavedLocationsCard';

export default function SavedLocations({savedLocations}) {

    if (!savedLocations.length) {
      return <div> You haven't saved any locations</div>
    }
  let theAddresses = savedLocations.map(location => {

      return (
        <div className="saved-locations-card" key={location.id}>
          <NavLink to={`/${location.id}`} key={location.id}>
            <p>{location.extra.address}</p>
          </NavLink>
          <div className='delete-button-container'>
            <button className="delete-button">✖️</button>
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

