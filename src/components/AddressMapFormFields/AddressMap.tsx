import { getPosition, MAP_DEFAULT_ZOOM } from 'modules/common/interfaces/leaflet-utils';
import { ReactNode } from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';

type Props = {
  lat: number;
  lng: number;
  market: ReactNode;
  className?: string
};

const AddressMap = ({ lat, lng, market, className }: Props) => {
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
      {market}
    </MapContainer>
  );
};

export default AddressMap;
