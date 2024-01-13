import React from 'react';
import { Link } from 'react-router-dom';

export default function SavedLocations({savedLocations}) {

  const savedPlaces = savedLocations.map(places => {
    return (
      <div>
        <p>{places.extra.address}</p>
      </div>
    )
  })
  return (
    <section>
      <h1>Saved Locations</h1>
      <div>{savedPlaces}</div>
    </section>
  );
}