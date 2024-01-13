import React from "react";
import  { Link } from "react-router-dom";
import './LocationsContainer.css';
import LocationDetails from "./LocationDetails";
import Card from './Card'

export default function LocationsContainer({locations}) {
  
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