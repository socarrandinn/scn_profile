import React, { memo, useMemo } from 'react';
import Box from '@mui/material/Box';
import { ChildrenProps } from '@dfl/mui-react-common';
import { CircularProgress } from '@mui/material';
import L, { ControlPosition, LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const defaultLatitude = 23.136666666667;
export const defaultLongitude = -82.358888888889;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// const defaultMapLayers = [
//   {
//     name: 'Dark Mode',
//     layer: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
//     checked: true,
//   },
//   {
//     name: 'Light Mode',
//     layer: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png',
//     checked: false,
//   },
//   {
//     name: 'Satellite View',
//     layer: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
//     checked: false,
//   },
// ];

type MapContainerProps = ChildrenProps & {
  controlPosition?: ControlPosition,
  scalePosition?: ControlPosition,
  style?: any,
  sx?: any,
  zoom?: number,
  minZoom?: number,
  maxZoom?: number,
  isLoading?: boolean,
  centerPosition?: any,
};

const MapContainerCmp = ({
  children,
  controlPosition = 'bottomright',
  scalePosition = 'bottomleft',
  isLoading,
  sx,
  centerPosition,
  ...rest
}: MapContainerProps) => {
  const centerCoordinates = useMemo(() => [defaultLatitude, defaultLongitude] as LatLngExpression, []);

  if (isLoading) {
    return <div id="map-id" className="flex w-full h-full justify-center items-center">
      <CircularProgress sx={{ color: 'black' }} />
    </div>;
  }

  return <Box id="map-id" className="flex-grow h-full" sx={sx}>
    <MapContainer
      id="general-map-global"
      style={{ height: '100%', zIndex: 1, background: '#151414' }}
      center={centerPosition || centerCoordinates}
      zoom={7}
      maxZoom={25}
      scrollWheelZoom={true}
      {...rest}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Box className={'h-full'} sx={{ pl: '40px', pr: '40px' }}>
        {children}
      </Box>
    </MapContainer>
  </Box>;
};

export default memo(MapContainerCmp);
