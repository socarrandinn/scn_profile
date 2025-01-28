import { useDFLForm } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import AddressMap from 'components/AddressMapFormFields/AddressMap';
import AddressMapFormFields from 'components/AddressMapFormFields/AddressMapFormFields';
import AddressMapMarket from 'components/AddressMapFormFields/AddressMapMarket';
import { IAddress } from 'modules/common/interfaces';
import { useCallback, useEffect, useState } from 'react';
import { Control, useWatch } from 'react-hook-form';
import { geocodeAddress } from 'utils/address-geo';

type AddressInfoProps = {
  name?: string;
  required?: boolean;
  hideZip?: boolean;
  control?: Control<any, any>;
};

const AddressMapForm = ({ name = 'address', control }: AddressInfoProps) => {
  const address = useWatch({ control, name }) as IAddress;
  const { setValue } = useDFLForm();

  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const [formattedAddress, setFormattedAddress] = useState<string>(address?.formattedAddress ?? '');

  const handleAddressSubmit = useCallback(async (fullAddress: string) => {
    const coords = await geocodeAddress(fullAddress);
    if (coords) {
      setFormattedAddress(fullAddress);
      setCoordinates(coords);
      setValue?.(`${name}.location`, {
        type: 'Point',
        coordinates: [coords?.lat, coords?.lng],
      });
    }
  }, [name, setValue]);

  const changeLocation = (coordinates: { lat: number; lng: number }) => {
    setCoordinates(coordinates);
    setValue?.(`${name}.location`, {
      type: 'Point',
      coordinates: [coordinates?.lat, coordinates?.lng],
    });
  };

  /* search coordinates */
  useEffect(() => {
    if (address.houseNumber && address.address1 && address.city && address.state && address.country) {
      const fullAddress = `${address.houseNumber} ${address.address1}, ${address.city}, ${address.state}, ${address.country}`;
      handleAddressSubmit(fullAddress);
    }
  }, [address.houseNumber, address.address1, address.city, address.state, address.country, handleAddressSubmit]);

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <AddressMapFormFields addressFieldName={name} control={control} address={address} />
      </Grid>
      {coordinates && (
        <Grid item xs={12} sx={{ position: 'relative', height: '300px', width: '100%' }}>
          <AddressMap
            lat={coordinates.lat}
            lng={coordinates.lng}
            className='w-full h-[300px]'
            market={
              <AddressMapMarket
                position={{
                  lat: coordinates.lat,
                  lng: coordinates.lng,
                }}
                setPosition={changeLocation}
                floaterAddress={formattedAddress}
              />
            }
          />
        </Grid>
      )}
    </Grid>
  );
};

export default AddressMapForm;
