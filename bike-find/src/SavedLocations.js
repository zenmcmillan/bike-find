import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './SavedLocations.css';
import SavedLocationsCard from './SavedLocationsCard';
import PropTypes from 'prop-types';

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

SavedLocations.propTypes = {
  savedLocations: PropTypes.arrayOf(
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
  deleteCard: PropTypes.func.isRequired,
};

