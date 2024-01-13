import React from 'react';
import { useParams } from 'react-router-dom';
import './LocationDetails.css';

export default function LocationDetails({locations}) {
  const id = useParams().id
  console.log("LOCATIONS", locations)

 const place = locations.find((element) => element.id === id);
 console.log("PLACE",place)

 if (place) {
  return (
    <section className="location-details-container">
      <div className="location-details-card">
        <h2>Address: {place.extra.address} </h2>
        <p>Zip Code: {place.extra.postal_code}</p>
        <p>Empty Slots: {place.empty_slots}</p>
        <p>Available Bikes: {place.free_bikes}</p>
        <button className="save-location-button">Save Location</button>
      </div>
    </section>
  );
 }
}

