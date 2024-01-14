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
        <div key={location.id}>
          <NavLink to={`/${location.id}`} key={location.id} className="card">
           {location.extra.address}
          </NavLink>
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

