import { Grid } from '@mui/material';
import AddressMap from 'components/AddressMapFormFields/AddressMap';
import AddressMapInternationalFormFields from 'components/AddressMapFormFields/AddressMapInternationalFormFields';
import AddressMapMarket from 'components/AddressMapFormFields/AddressMapMarket';
import { useEffect, useRef, useState } from 'react';
import { Control, useWatch } from 'react-hook-form';
import { useGeoLocation } from '../hooks/useGeoLocation';
import { useDFLForm } from '@dfl/mui-react-common';
import AddressMapInfo from '../AddressMapInfo';

type AddressInfoProps = {
  name?: string;
  required?: boolean;
  hideZip?: boolean;
  control?: Control<any, any>;
  disabledLocation?: boolean;
};

const AddressInternationalMapForm = ({ name = 'address', disabledLocation = false, control }: AddressInfoProps) => {
  const address = useWatch({ control, name });
  const prevAddressRef = useRef<string | null>(null);
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const { debouncedGetOneLocation, changeLocation, isLoading } = useGeoLocation({ name, setCoordinates });
  const formattedAddress = [address?.address2, address?.address1, address.city, address.state, address.country]
    .filter(Boolean)
    .join(', ');
  const refAddress = [address.city, address.state, address.country].filter(Boolean).join(', ');
  const { setValue } = useDFLForm();

  /* formatted address */
  useEffect(() => {
    setValue?.(`${name}.formattedAddress`, formattedAddress);
  }, [formattedAddress, name, setValue]);

  /* get location coordinates */
  useEffect(() => {
    if (address?.location?.coordinates) {
      setCoordinates({
        lat: address?.location?.coordinates[0] ?? 0,
        lng: address?.location?.coordinates[1] ?? 0,
      });
    }
  }, [address?._id, address?.location?.coordinates]);

  /* get location coordinates */
  useEffect(() => {
    if (address?.city && address?.state && address?.country && !disabledLocation) {
      if (prevAddressRef.current !== refAddress) {
        prevAddressRef.current = refAddress;
        debouncedGetOneLocation(refAddress);
      }
    }
  }, [
    address?.city,
    address?.state,
    address?.country,
    debouncedGetOneLocation,
    refAddress,
    coordinates,
    disabledLocation,
  ]);

  /* set formatted address */

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <AddressMapInternationalFormFields addressFieldName={name} control={control} />
      </Grid>
      {coordinates && (
        <Grid item xs={12}>
          <AddressMapInfo />
        </Grid>
      )}
      <Grid item xs={12} sx={{ position: 'relative', height: '300px', width: '100%' }}>
        <AddressMap
          lat={coordinates?.lat ?? 0}
          lng={coordinates?.lng ?? 0}
          className='w-full h-[300px]'
          isLoading={isLoading}
          market={
            <AddressMapMarket
              position={{
                lat: coordinates?.lat ?? 0,
                lng: coordinates?.lng ?? 0,
              }}
              setPosition={changeLocation}
            />
          }
        />
      </Grid>
    </Grid>
  );
};

export default AddressInternationalMapForm;
