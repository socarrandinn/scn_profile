import React, {
  createContext,
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { addressFieldPath, extractLocationDetails, getUserLocation } from 'utils/address';
import { useToggle } from '@dfl/hook-utils';
import clsx from 'clsx';
import { Alert } from '@mui/material';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { IAddress } from 'modules/common/interfaces';
import { GoogleAddressNotFoundDialog } from 'components/GoogleAddressNotFoundDialog';
import { useTranslation } from 'react-i18next';

const defaultLocation = {
  lat: 23.13302,
  lng: -82.38304,
};

type ContextValue = {
  apiLoader?: ReturnType<typeof useJsApiLoader>;
  map?: google.maps.Map | null;
  removeMarker?: () => void;
  createMarker?: (_location: google.maps.LatLng) => void;
  currentAddress?: IAddress | null;
  setCurrentAddress?: Dispatch<SetStateAction<IAddress | null>>;
  children?: ReactNode;
  showMap?: boolean;
  setShowMap?: Dispatch<SetStateAction<boolean>>;
  watch?: UseFormWatch<any>;
  addressFieldName?: string;
  setValue?: UseFormSetValue<any>;
  autoCompleteService?: google.maps.places.AutocompleteService;
  placesService?: google.maps.places.PlacesService;
};

// Default value of the context
const defaultValue: ContextValue = {
  createMarker: (_location: google.maps.LatLng) => {},
  removeMarker: () => {},
  map: null,
  currentAddress: null,
  setCurrentAddress: () => {},
  showMap: false,
  setShowMap: () => {},
};

const GoogleMapAddressContext = createContext<ContextValue>(defaultValue);

const GoogleMapAddressProvider = ({ children, setValue, watch, addressFieldName = 'address' }: ContextValue) => {
  const apiLoader = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY as string,
    libraries: ['places'],
  });

  const { t } = useTranslation('common');

  const { isOpen, setOpen, onClose } = useToggle();

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);
  const [currentAddress, setCurrentAddress] = useState<IAddress | null>(null);
  const [showMap, setShowMap] = useState<boolean>(false);
  const [locationUpdated, setLocationUpdated] = useState<boolean>(false);

  const autoCompleteService: MutableRefObject<google.maps.places.AutocompleteService> =
    useRef<google.maps.places.AutocompleteService>(null) as MutableRefObject<google.maps.places.AutocompleteService>;

  const placesService: MutableRefObject<google.maps.places.PlacesService> = useRef<google.maps.places.PlacesService>(
    null,
  ) as MutableRefObject<google.maps.places.PlacesService>;

  const removeMarker = useCallback(() => {
    marker?.setMap(null);
    setMarker(null);
  }, [marker]);

  const location = watch?.(addressFieldPath('location', addressFieldName));

  const createMarker = useCallback(
    (position: google.maps.LatLng | google.maps.LatLngLiteral, center: boolean = true) => {
      const marker = new google.maps.Marker({
        position,
        map,
      });
      removeMarker();
      if (center) {
        map?.setCenter(position);
      }
      setMarker(marker);
    },
    [map, removeMarker],
  );

  const onLoadGoogleMap = useCallback(
    async (map: google.maps.Map) => {
      if (marker) {
        marker?.setMap(map);
        map?.setCenter(marker.getPosition() as google.maps.LatLng);
      } else {
        let location;
        try {
          location = await getUserLocation();
        } catch (e) {
          location = defaultLocation;
        }
        map?.setCenter(location);
      }

      setMap(map);
    },
    [marker],
  );

  const onMapClick = useCallback(
    async (e: google.maps.MapMouseEvent) => {
      removeMarker();
      const geocoder = new google.maps.Geocoder();
      const { results } = await geocoder.geocode({ location: e.latLng });
      if (results?.[0]) {
        createMarker(e.latLng as google.maps.LatLng, false);
        setValue?.(addressFieldPath('location', addressFieldName), extractLocationDetails(results[0]));
        setLocationUpdated(true);
      } else {
        setOpen(true);
      }
    },
    [addressFieldName, createMarker, removeMarker, setOpen, setValue],
  );

  useEffect(() => {
    if (apiLoader?.isLoaded && !autoCompleteService?.current && (window as any).google) {
      autoCompleteService.current = new (window as any).google.maps.places.AutocompleteService();
    }
  }, [apiLoader]);

  useEffect(() => {
    if (apiLoader?.isLoaded && !placesService?.current && (window as any).google && map) {
      placesService.current = new (window as any).google.maps.places.PlacesService(map);
    }
  }, [map, apiLoader]);

  return (
    <GoogleMapAddressContext.Provider
      value={{
        apiLoader,
        map,
        removeMarker,
        createMarker,
        currentAddress,
        showMap,
        setShowMap,
        setCurrentAddress,
        autoCompleteService: autoCompleteService?.current,
        placesService: placesService?.current,
      }}
    >
      <GoogleAddressNotFoundDialog open={isOpen} onClose={onClose} />
      {children}
      {apiLoader.isLoaded && (
        <>
          {showMap && !location?.coordinates?.length && (
            <div className={'my-4 w-full'}>
              <Alert severity={'warning'}>{t('messages.addressNoLocation')}</Alert>
            </div>
          )}
          <div className={clsx('relative my-4 h-[400px] w-full', { hidden: !(showMap || locationUpdated) })}>
            <GoogleMap
              mapContainerStyle={{
                width: '100%',
                height: '400px',
              }}
              zoom={16}
              onLoad={onLoadGoogleMap}
              onUnmount={() => {
                setMap(null);
              }}
              onClick={onMapClick}
              options={{
                disableDefaultUI: true,
                fullscreenControl: true,
                zoomControl: true,
              }}
            />
          </div>
        </>
      )}
    </GoogleMapAddressContext.Provider>
  );
};

// Default hook to retrieve context data
const useGoogleMapAddress = () => {
  const context = useContext(GoogleMapAddressContext);
  if (context === undefined) {
    throw new Error('The component must be inside a GoogleMapAddressProvider');
  }
  const {
    map,
    currentAddress,
    setCurrentAddress,
    apiLoader,
    createMarker,
    showMap,
    setShowMap,
    autoCompleteService,
    placesService,
  } = context;
  return {
    map,
    currentAddress,
    setCurrentAddress,
    apiLoader,
    createMarker,
    showMap,
    setShowMap,
    autoCompleteService,
    placesService,
  };
};

export { GoogleMapAddressProvider, useGoogleMapAddress };
