import { ReactNode, useEffect } from 'react';
import { getPosition, MAP_DEFAULT_ZOOM } from 'modules/common/interfaces/leaflet-utils';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Box, CircularProgress } from '@mui/material';

type Props = {
  lat: number;
  lng: number;
  market: ReactNode;
  className?: string;
  isLoading?: boolean;
};

const AddressMap = ({ lat, lng, market, className, isLoading }: Props) => {
  const center = getPosition({ lat, lng });

  return (
    <div style={{ position: 'relative' }}>
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      )}

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
        {!isLoading && <UpdateMapView center={center} />}

        {market}
      </MapContainer>
    </div>
  );
};

export default AddressMap;

const UpdateMapView = ({ center }: any) => {
  const map = useMap();

  useEffect(() => {
    map?.setView(center, map?.getZoom());
  }, [center, map]);

  return null;
};
