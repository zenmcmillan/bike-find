import './App.css';
import { useState, useEffect } from 'react';
import { getAddresses } from './apiCalls';
import LocationsContainer from './LocationsContainer';
import SavedLocations from './SavedLocations'
import LocationDetails from './LocationDetails';
import NotFound from './NotFoundPage';
import dumboImage from './Dumbo.jpg.webp';
import {Routes, Route, NavLink, useNavigate} from 'react-router-dom';

function App() {
  const [locations, setLocations] = useState([]);
  const [savedLocations, setSavedLocations] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const deleteCard = (id) => {
    const duplicate = savedLocations.find( card => card.id === id);
    duplicate.saved = false;
    const filteredCards = savedLocations.filter(card => card.id !== id)
    setSavedLocations(filteredCards)
  }

  const saveLocation = (location) => {
    if (!savedLocations.some((savedLocation) => savedLocation.id === location.id)) {
      location.saved = true
      setSavedLocations([...savedLocations, location]);
    }

  }

  const onHomePage = window.location.pathname === '/';

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = () => {
    getAddresses()
      .then((data) => {
        let addresses = data.network.stations.map((element) => element);
        let locations = addresses.map((obj) => ({ ...obj, saved: false }));
        setLocations(locations);
      })
      .catch((error) => {
        if (!Response.ok) {
           setError(
             "There is an error with the server. Please try again later!"
           );
        }
      });
     
  };

  console.log("SAVED LOCATIONS", savedLocations)


  return (
    <main className="App">
      <section className="header">
        <div className="home-container">
          <NavLink to="/" className="home">
            Home
          </NavLink>
        </div>
        <div className="title-container">
          <h1 className="home-title">BikeFind NYC</h1>
        </div>
        <div className="saved-locations-container">
          <NavLink to="/saved-locations" className="saved-locations">
            Saved Locations
          </NavLink>
        </div>
      </section>

      {onHomePage && (
        <img
          className="dumbo-image"
          src={dumboImage}
          alt="Washington Street in DUMBO New York City"
        />
      )}

      <Routes>
        <Route
          path="/"
          element={<LocationsContainer locations={locations} error={error} />}
        />
        <Route
          path="/saved-locations"
          element={
            <SavedLocations
              savedLocations={savedLocations}
              deleteCard={deleteCard}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <LocationDetails
              locations={locations}
              saveLocation={saveLocation}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
