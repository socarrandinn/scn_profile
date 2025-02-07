import { useDFLForm } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import AddressMap from 'components/AddressMapFormFields/AddressMap';
import AddressMapFormFields from 'components/AddressMapFormFields/AddressMapFormFields';
import AddressMapMarket from 'components/AddressMapFormFields/AddressMapMarket';
import { IAddress } from 'modules/common/interfaces';
import { LeafletService } from 'modules/common/service';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Control, useWatch } from 'react-hook-form';
import { getFormatterAddress } from 'utils/address-geo';

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

  useEffect(() => {
    if (address?.location?.coordinates) {
      setCoordinates({
        lat: address?.location?.coordinates[0] as number,
        lng: address?.location?.coordinates[1] as number,
      });
    }
  }, [address?._id, address?.location?.coordinates]);

  const handleAddressSubmit = useCallback(
    async (fullAddress: string) => {
      if (!fullAddress) return;
      try {
        const coord = await LeafletService.geoCode(fullAddress);
        if (coord) {
          setCoordinates(coord);
          setValue?.(`${name}.location`, {
            type: 'Point',
            coordinates: [coord.lat, coord.lng],
          });
        }
      } catch (error) {
        console.error('Error en la geocodificación:', error);
      }
    },
    [name, setValue],
  );

  const changeLocation = (coordinates: { lat: number; lng: number }) => {
    setCoordinates(coordinates);
    setValue?.(`${name}.location`, {
      type: 'Point',
      coordinates: [coordinates.lat, coordinates.lng],
    });
  };

  useEffect(() => {
    const { houseNumber, address1, city, state, country } = address;
    if (houseNumber && address1 && city && state && country) {
      const searchAddress = getFormatterAddress(address);
      const formatterAddress = getFormatterAddress(address, true);
      if (prevAddressRef.current !== formatterAddress) {
        handleAddressSubmit(searchAddress);
        setValue?.(`${name}.formattedAddress`, getFormatterAddress(address, true));
        prevAddressRef.current = formatterAddress;
      }
    }
  }, [address, coordinates, handleAddressSubmit, name, setValue]);

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
              />
            }
          />
        </Grid>
      )}
    </Grid>
  );
};

export default AddressMapForm;
