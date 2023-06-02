import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from "../../functions/LocationMarker";

interface IMapSettings {
  position: LatLngExpression;
}

export const LeafetMap = ({ position }: IMapSettings) => {
  return (
    <MapContainer center={position} zoom={12} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker position={position} />
    </MapContainer>
  );
};
