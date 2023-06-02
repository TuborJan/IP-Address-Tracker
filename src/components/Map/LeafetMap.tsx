import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from "../../functions/LocationMarker";

interface IMapSettings {
  position: LatLngExpression;
  zoom: number;
}

export const LeafetMap = ({ position, zoom }: IMapSettings) => {
  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker position={position} />
    </MapContainer>
  );
};
