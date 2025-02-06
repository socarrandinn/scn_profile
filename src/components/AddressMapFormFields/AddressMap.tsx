import { ReactNode, useEffect } from 'react';
import { getPosition, MAP_DEFAULT_ZOOM } from 'modules/common/interfaces/leaflet-utils';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

type Props = {
  lat: number;
  lng: number;
  market: ReactNode;
  className?: string;
};

const AddressMap = ({ lat, lng, market, className }: Props) => {
  const center = getPosition({ lat, lng });
  return (
    <MapContainer
      className={className}
      center={getPosition({ lat, lng })}
      zoom={MAP_DEFAULT_ZOOM}
      scrollWheelZoom
      zoomControl
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <UpdateMapView center={center} />

      {market}
    </MapContainer>
  );
};

export default AddressMap;

const UpdateMapView = ({ center }: any) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);

  return null;
};
