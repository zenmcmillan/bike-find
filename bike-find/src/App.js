import './App.css';
// import Header from './Header.js';
import { useState, useEffect } from 'react';
import { getAddresses } from './apiCalls';
import LocationsContainer from './LocationsContainer';
import dumboImage from './Dumbo.jpg.webp';
import {Routes, Route, NavLink} from 'react-router-dom';

function App() {
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    fetchAddresses()
  }, [])

  const fetchAddresses = () => {
    getAddresses()
    .then((data) => {
      let addresses = data.network.stations.map(element => element)
      setLocations(addresses)
      console.log(addresses)
    })
    .catch((error) => {
      setError(error.message)
    })
  }

  console.log(locations)

  return (
    <main className="App">
      <section className="header">
        <div className="title-container">
          <h1>BikeFind NYC</h1>
        </div>
        <div className="saved-locations-container">
            <NavLink to="/saved-locations" className="saved-locations">
              Saved Locations
            </NavLink>
        </div>
      </section>
      <img className="dumbo-image" src={dumboImage} alt="Dumbo Image"></img>
      <LocationsContainer locations={locations} error={error} />
    </main>
  );
}

export default App;
