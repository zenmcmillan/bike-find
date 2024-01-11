import React from "react";
import './Header.css'

export default function Header() {
  return (
    <section className="header">
      <div className="title-container">
        <h1>BikeFind NYC</h1>
      </div>
      <div className="saved-locations-container">
        <h2 className="saved-locations">Saved Locations</h2>
      </div>
    </section>
  );
}