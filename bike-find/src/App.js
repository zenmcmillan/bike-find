import './App.css';
import Header from './Header.js';
import { useState, useEffect } from 'react';
import { getAddresses } from './apiCalls';
import LocationsContainer from './LocationsContainer'

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
      <Header />
     <LocationsContainer locations={locations} error={error}/>
    </main>
  );
}

export default App;
