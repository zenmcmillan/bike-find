import React from "react";
import  { Link } from "react-router-dom";
import './LocationsContainer.css';
import LocationDetails from "./LocationDetails";
import Card from './Card';
import PropTypes from 'prop-types'

export default function LocationsContainer({locations}) {
  console.log("LOCATIONS", locations)
  const addresses = locations.map(element => {

    const extra = {
      address: element.extra.address,
      postalCode: element.extra.address
    }

    return (
      <Link to={`/${element.id}`} key={element.id} >
        <Card extra={extra} id={element.id} key={element.id} />
      </Link>
    );
  })

  return (
    <section className="locations-container">
      <h1 className="locations-title">Locations</h1>
      <div className="card-container">{addresses}</div>
    </section>
  );
}

LocationsContainer.propTypes = {
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
  timestamp: PropTypes.number.isRequired
}


