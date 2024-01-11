import React from "react";
import './LocationsContainer.css';
import Card from "./Card";

export default function LocationsContainer({locations, error}) {
  const addresses = locations.map(address => {
    return (
      <Card 
       address={address}
      />
    )
  })
  return (
    <section>
      {!error ? <div className="card-container">{addresses}</div>  : <h1>500 Error! There's a problem with the server. Try again later</h1>}
    </section>
  )
}