import React from 'react';
import { Link } from 'react-router-dom';
import './SavedLocations.css';
import SavedLocationsCard from './SavedLocationsCard';

export default function SavedLocations({savedLocations}) {

  const addresses = savedLocations.map(location => {
    return (
      <Link to={`/${location.id}`} key={location.id}>
        <SavedLocationsCard addresses={location.extra.address} />
      </Link>
    );
  })
  
  return (
    <section>
     <h1>Saved Locations</h1>
     <div className="card-container">{addresses}</div>
    </section>
  );
}
