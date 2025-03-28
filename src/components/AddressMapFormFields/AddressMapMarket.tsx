import { Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

const customIcon = L.icon({
  iconUrl: require('assets/map/marker-icon.png'),
  iconSize: [38, 53], // Tamaño del ícono [ancho, alto]
  iconAnchor: [20, 53], // Punto donde se ancla el ícono en el mapa [x, y]
  popupAnchor: [0, 0], // Punto desde el que el popup aparece relativo al ícono
});

type Props = {
  position: { lat: number; lng: number };
  // floaterAddress: string;
  setPosition?: (position: any) => void;
};
const AddressMapMarket = ({ position, setPosition }: Props) => {
  useMapEvents({
    click: (e) => {
      setPosition?.({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });
  return position === null ? null : <Marker position={[position.lng, position.lat]} icon={customIcon} />;
};

export default AddressMapMarket;
