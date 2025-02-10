import { useDFLForm } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import AddressMap from 'components/AddressMapFormFields/AddressMap';
import AddressMapFormFields from 'components/AddressMapFormFields/AddressMapFormFields';
import AddressMapMarket from 'components/AddressMapFormFields/AddressMapMarket';
import { CU_COORDINATES } from 'constants/COORDINATES';
import { IAddress } from 'modules/common/interfaces';
import { useEffect, useRef, useState } from 'react';
import { Control, useWatch } from 'react-hook-form';
import { getFormatterAddress } from 'utils/address-geo';
import { useGeoLocation } from '../hooks/useGeoLocation';

type AddressInfoProps = {
  name?: string;
  required?: boolean;
  hideZip?: boolean;
  control?: Control<any, any>;
};

const AddressMapForm = ({ name = 'address', control }: AddressInfoProps) => {
  const address = useWatch({ control, name }) as IAddress;
  const prevAddressRef = useRef<string | null>(null);
  const { setValue } = useDFLForm();
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const { debouncedGetOneLocation, changeLocation } = useGeoLocation({ name, setCoordinates });

  useEffect(() => {
    if (address?.location?.coordinates) {
      setCoordinates({
        lat: address?.location?.coordinates[0] as number,
        lng: address?.location?.coordinates[1] as number,
      });
    }
  }, [address?._id, address?.location?.coordinates]);

  useEffect(() => {
    const { address1, city, state, country } = address;
    // @ts-ignore
    if (address1?.code && city?.code && state?.code && country) {
      const searchAddress = getFormatterAddress(address);
      const formatterAddress = getFormatterAddress(address, true);
      if (prevAddressRef.current !== formatterAddress) {
        debouncedGetOneLocation(searchAddress);
        setValue?.(`${name}.formattedAddress`, getFormatterAddress(address, true));
        prevAddressRef.current = formatterAddress;
      }
    }
  }, [address, coordinates, debouncedGetOneLocation, name, setValue]);

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <AddressMapFormFields addressFieldName={name} control={control} address={address} />
      </Grid>
      <Grid item xs={12} sx={{ position: 'relative', height: '300px', width: '100%' }}>
        <AddressMap
          lat={coordinates?.lat ?? CU_COORDINATES.lat}
          lng={coordinates?.lng ?? CU_COORDINATES.lng}
          className='w-full h-[300px]'
          market={
            <AddressMapMarket
              position={{
                lat: coordinates?.lat ?? CU_COORDINATES.lat,
                lng: coordinates?.lng ?? CU_COORDINATES.lng,
              }}
              setPosition={changeLocation}
            />
          }
        />
      </Grid>
    </Grid>
  );
};

export default AddressMapForm;
