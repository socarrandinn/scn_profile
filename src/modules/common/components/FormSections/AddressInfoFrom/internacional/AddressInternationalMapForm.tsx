import { Grid } from '@mui/material';
import AddressMap from 'components/AddressMapFormFields/AddressMap';
import AddressMapInternationalFormFields from 'components/AddressMapFormFields/AddressMapInternationalFormFields';
import AddressMapMarket from 'components/AddressMapFormFields/AddressMapMarket';
import { useCallback, useEffect, useState } from 'react';
import { Control, UseFormClearErrors, useWatch } from 'react-hook-form';
import { useDFLForm } from '@dfl/mui-react-common';
import AddressMapInfo from '../AddressMapInfo';
import useFindGoogleGeoCode from 'components/AddressMapFormFields/hooks/useFindGoogleGeoCode';

type AddressInfoProps = {
  name?: string;
  required?: boolean;
  hideZip?: boolean;
  control?: Control<any, any>;
  disabledLocation?: boolean;
  countryCode?: string;
  clearErrors: UseFormClearErrors<any>;
};

const AddressInternationalMapForm = ({
  name = 'address',
  clearErrors,
  disabledLocation = false,
  control,
  countryCode,
}: AddressInfoProps) => {
  const address = useWatch({ control, name });
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(address?.location?.coordinates);
  const [editSearchLocation, setEditSearchLocation] = useState<boolean>(false);

  const { setValue: setValueForm } = useDFLForm();

  // Obtener las coordenadas iniciales desde la dirección
  useEffect(() => {
    if (address?.location?.coordinates) {
      setCoordinates({
        lat: address?.location?.coordinates[0] ?? 0,
        lng: address?.location?.coordinates[1] ?? 0,
      });
    }
  }, [address?.location?.coordinates]);

  // Extraer los componentes de la dirección
  const extractAddressComponents = useCallback((addressComponents: any[]) => {
    const address = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
      location: {
        coordinates: [0, 0],
      },
    };

    addressComponents.forEach((component: any) => {
      if (component?.types?.includes('street_number')) {
        address.address1 = component?.long_name;
      } else if (component?.types?.includes('route')) {
        address.address1 += ` ${component?.long_name as string}`.trim();
      } else if (component?.types?.includes('subpremise')) {
        address.address2 = component?.long_name;
      } else if (component?.types?.includes('locality')) {
        address.city = component?.long_name;
      } else if (component?.types?.includes('administrative_area_level_1')) {
        address.state = component?.long_name;
      } else if (component?.types?.includes('country')) {
        address.country = component?.long_name;
      } else if (component?.types?.includes('postal_code')) {
        address.zipCode = component?.long_name;
      }
    });

    return address;
  }, []);

  // Obtener la dirección desde las coordenadas
  const { data, isLoading: isLoadingGeo } = useFindGoogleGeoCode(coordinates?.lat, coordinates?.lng, countryCode);

  useEffect(() => {
    if (coordinates?.lat && coordinates?.lng && !isLoadingGeo && data?.results && data?.results?.length > 0) {
      setEditSearchLocation(false);

      const address = extractAddressComponents(data?.results?.[0]?.address_components);
      const formattedAddress = data?.results?.[0]?.formatted_address;

      // Actualizar el formulario solo si los valores han cambiado
      setValueForm?.('address.address1', address.address1);
      setValueForm?.('address.address2', address.address2);
      setValueForm?.('address.city', address.city);
      setValueForm?.('address.state', address.state);
      setValueForm?.('address.country', address.country);
      setValueForm?.('address.zipCode', address.zipCode);
      setValueForm?.('address.location.coordinates', [coordinates.lat, coordinates.lng]);
      setValueForm?.('address.formattedAddress', formattedAddress);

      if (address?.address1) {
        clearErrors(`${name}.address1`);
      }
      if (address?.city) {
        clearErrors(`${name}.city`);
      }
      if (address?.state) {
        clearErrors(`${name}.state`);
      }
      if (address?.zipCode) {
        clearErrors(`${name}.zipCode`);
      }
      if (address?.location) {
        clearErrors(`${name}.location`);
      }
    }
  }, [
    setValueForm,
    data?.results,
    isLoadingGeo,
    extractAddressComponents,
    coordinates?.lat,
    coordinates?.lng,
    clearErrors,
    name,
  ]);

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <AddressMapInternationalFormFields
          key={JSON.stringify({ coordinates })}
          addressFieldName={name}
          control={control}
          edit={editSearchLocation}
          setEdit={setEditSearchLocation}
          clearErrors={clearErrors}
        />
      </Grid>
      {coordinates && (
        <Grid item xs={12}>
          <AddressMapInfo />
        </Grid>
      )}
      <Grid item xs={12} sx={{ position: 'relative', height: '300px', width: '100%' }}>
        <AddressMap
          key={JSON.stringify(coordinates)}
          lat={coordinates?.lat ?? 0}
          lng={coordinates?.lng ?? 0}
          className='w-full h-[300px]'
          // isLoading={isLoadingGeo}
          market={
            <AddressMapMarket
              position={{
                lat: coordinates?.lat ?? 0,
                lng: coordinates?.lng ?? 0,
              }}
              setPosition={setCoordinates}
            />
          }
        />
      </Grid>
    </Grid>
  );
};

export default AddressInternationalMapForm;
