import './App.css';
// import Header from './Header.js';
import { useState, useEffect } from 'react';
import { getAddresses } from './apiCalls';
import LocationsContainer from './LocationsContainer';
import SavedLocations from './SavedLocations'
import LocationDetails from './LocationDetails';
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
        <div className="home-container">
          <NavLink to="/" className="home">Home</NavLink>
        </div>

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
      <Routes>
        <Route
          path="/"
          element={<LocationsContainer locations={locations} error={error} />}
        />
        <Route path="/saved-locations" element={<SavedLocations />} />
        <Route
          path="/:id"
          element={<LocationDetails locations={locations} />}
        />
      </Routes>
    </main>
  );
}

export default App;
