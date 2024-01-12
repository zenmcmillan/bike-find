import React from "react";
import './LocationsContainer.css';
import Card from "./Card";

export default function LocationsContainer({locations}) {
  const addresses = locations.map(element => {

    const extra = {
      address: element.extra.address,
      postalCode: element.extra.address
    }

    return (
      <Card 
      extra={extra}
      id={element.id}
      key={element.id}
      />
    )
  })
  return (
    <section className="card-container">{addresses}</section>
  )
}