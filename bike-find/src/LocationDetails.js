import React from 'react';
import { useParams } from 'react-router-dom';
import './LocationDetails.css';
import PropTypes from 'prop-types';

export default function LocationDetails({locations, saveLocation}) {
  const id = useParams().id

 const place = locations.find((element) => element.id === id);

 if (place) {
  return (
    <section className="location-details-container">
      <div className="location-details-card">
        <h2>Address: {place.extra.address} </h2>
        <p>Zip Code: {place.extra.postal_code}</p>
        <p>Empty Slots: {place.empty_slots}</p>
        <p>Available Bikes: {place.free_bikes}</p>
        {place.saved ? (
          <button
            className="save-location-button"
            style={{ backgroundColor: "green" }}
            onClick={() => saveLocation(place)}
          >
            Saved <a className="checkmark">✔</a>
          </button>
        ) : (
          <button
            className="save-location-button"
            onClick={() => saveLocation(place)}
          >
            Save Location
          </button>
        )}
      </div>
    </section>
  );
 }
}

LocationDetails.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      empty_slots: PropTypes.number.isRequired,
      extra: PropTypes.shape({
        address: PropTypes.string.isRequired,
        ebikes: PropTypes.number.isRequired,
        has_ebikes: PropTypes.bool.isRequired,
        postal_code: PropTypes.string.isRequired,
        slots: PropTypes.number.isRequired,
        ui: PropTypes.number.isRequired,
      }).isRequired,
      free_bikes: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      saved: PropTypes.bool.isRequired,
      timestamp: PropTypes.number.isRequired,
    })
  ).isRequired,
  saveLocation: PropTypes.func.isRequired,
};
