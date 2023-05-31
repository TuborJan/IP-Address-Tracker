import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";

export const LeafetMap = () => {
  const [position, setPosition] = useState<LatLngExpression>([
    55.7522, 37.6156,
  ]); //default position Moscow
  const [zoom, setZoom] = useState<number>(10); //default zoom 10

  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
