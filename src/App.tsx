import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";
import Map from "./components/Map";

function App() {
  return (
    <MapContainer
      className="map-container"
      center={[51.0, 19.0]}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Map />
    </MapContainer>
  );
}

export default App;
