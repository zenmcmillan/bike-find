import React from 'react';
import { Link } from 'react-router-dom';
import './SavedLocations.css';
import SavedLocationsCard from './SavedLocationsCard';

export default function SavedLocations({savedLocations}) {

  const savedPlaces = savedLocations.map(places => {
    return (
        <SavedLocationsCard savedPlaces={places.extra.address} />
    )
  })
  return (
    <section>
     <h1>Saved Locations</h1>
     <div className="card-container">{savedPlaces}</div>
    </section>
  );
}