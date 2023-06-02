import { useState } from "react";
import { LatLngExpression } from "leaflet";
import "./App.css";
import { LeafetMap } from "./components/Map/LeafetMap";
import { SearchAdress } from "./components/SearchAddress/SearchAddress";

function App() {
  const [position, setPosition] = useState<LatLngExpression>([
    51.50853, -0.12574,
  ]); //default position London

  return (
    <div className="App">
      <SearchAdress setPosition={setPosition} />
      <LeafetMap position={position} />
    </div>
  );
}

export default App;
