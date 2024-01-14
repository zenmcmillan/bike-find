import React from "react";
import { NavLink } from "react-router-dom";
import "./SavedLocationsCard.css";

export default function SavedLocationsCard({ addresses }) {

console.log("ADRESSES", addresses)

  return (
      <div className="card-container">
        {/* <p>{addresses}</p> */}
        {/* <button className="delete-button">✖️</button> */}
      </div>
  );
}

