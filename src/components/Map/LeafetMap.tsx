import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from "../LocationMarker/LocationMarker";

interface IMapSettings {
  position: LatLngExpression;
}

export const LeafetMap = ({ position }: IMapSettings) => {
  return (
    <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker position={position} />
    </MapContainer>
  );
};
