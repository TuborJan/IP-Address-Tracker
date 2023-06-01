import { useState } from "react";
import { LatLngExpression } from "leaflet";
import "./App.css";
import { LeafetMap } from "./components/Map/LeafetMap";
import { SearchAdress } from "./components/SearchAdress/SearchAdress";

function App() {
  const [position, setPosition] = useState<LatLngExpression>([
    55.7522, 37.6156,
  ]); //default position Moscow
  // const [position, setPosition] = useState<LatLngExpression>([40.712, -74.227]); //default position Moscow
  const [zoom, setZoom] = useState<number>(10); //default zoom 10

  return (
    <div className="App">
      <SearchAdress setPosition={setPosition} />
      <LeafetMap position={position} zoom={zoom} />
    </div>
  );
}

export default App;
