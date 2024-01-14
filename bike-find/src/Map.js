import { MapContainer, TileLayer } from "react-leaflet";
import './Map.css';

export default function Map({place}) {
  console.log("PLACE", place.longitude)
  
  
  return (
    <MapContainer center={[40.7128, -74.0060]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        style={{ height: "10em", width: "25%" }}
      />
    </MapContainer>
  );
}