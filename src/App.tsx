import { useState } from "react";
import { LatLngExpression } from "leaflet";
import "./App.css";
import { LeafetMap } from "./components/Map/LeafetMap";
import { SearchAdress } from "./components/SearchAdress/SearchAdress";

function App() {
  const [position, setPosition] = useState<LatLngExpression>([
    51.50853, -0.12574,
  ]); //default position London
  const [zoom, setZoom] = useState<number>(10); //default zoom 10

  return (
    <div className="App">
      <SearchAdress setPosition={setPosition} />
      <LeafetMap position={position} zoom={zoom} />
    </div>
  );
}

export default App;
