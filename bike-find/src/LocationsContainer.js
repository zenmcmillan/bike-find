import React from "react";
import './LocationsContainer.css';
import Card from "./Card";

export default function LocationsContainer({locations, error}) {
  const addresses = locations.map(address => {

    const extra = {
      address: address.address,
      ebikes: address.ebikes,
      has_ebikes: address.has_ebikes,
      postal_code: address.postal_code,
      slots: address.slots,
    }

    return (
      <Card
      emptySlots={address.empty_slots} 
      extra={extra}
      freeBike={address.free_bike}
      id={address.id}
      key={address.id}
      />
    )
  })
  return (
    <section className="card-container">
      <h1>Locations</h1>
      <div>{addresses}</div>
    </section>
  )
}