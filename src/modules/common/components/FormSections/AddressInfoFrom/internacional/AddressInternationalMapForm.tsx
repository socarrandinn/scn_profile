import { useDFLForm } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import AddressMap from 'components/AddressMapFormFields/AddressMap';
import AddressMapInternationalFormFields from 'components/AddressMapFormFields/AddressMapInternationalFormFields';
import AddressMapMarket from 'components/AddressMapFormFields/AddressMapMarket';
import { CU_COORDINATES } from 'constants/COORDINATES';
import { LeafletService } from 'modules/common/service';
import { useEffect, useRef, useState } from 'react';
import { Control, useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

type AddressInfoProps = {
  name?: string;
  required?: boolean;
  hideZip?: boolean;
  control?: Control<any, any>;
};

const AddressInternationalMapForm = ({ name = 'address', control }: AddressInfoProps) => {
  const { t } = useTranslation('errors');
  const address = useWatch({ control, name });
  const prevAddressRef = useRef<string | null>(null);
  const { setValue } = useDFLForm();
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (address?.location?.coordinates) {
      setCoordinates({
        lat: parseFloat(address?.location?.coordinates[0]),
        lng: parseFloat(address?.location?.coordinates[1]),
      });
    }
  }, [address?._id, address?.location?.coordinates]);

  useEffect(() => {
    if (address?.geoCode) {
      const formattedAddress = [address?.geoCode?.lat, address?.geoCode?.lon].join(', ');
      if (prevAddressRef.current !== formattedAddress) {
        setValue?.(`${name}.location`, {
          type: 'Point',
          coordinates: [parseFloat(address?.geoCode?.lat), parseFloat(address?.geoCode?.lon)],
        });

        // this is format address
        setValue?.(`${name}.formattedAddress`, address?.geoCode?.display_name);

        setCoordinates({
          lat: parseFloat(address?.formattedAddress?.lat) || 0,
          lng: parseFloat(address?.formattedAddress?.lon) || 0,
        });

        prevAddressRef.current = formattedAddress;
      }
    }
  }, [name, setValue, setCoordinates, address?.formattedAddress, address]);

  // Mutación para buscar por lat, lng
  const { mutate: changeLocation, isLoading: isGeoLoading } = useMutation(
    (coordinates: { lat: number; lng: number }) => LeafletService.reverseGeoCode(coordinates?.lat, coordinates?.lng),
    {
      onSuccess: (data, value) => {
        if (data) {
          const coord = {
            lat: parseFloat(value.lat as unknown as string),
            lng: parseFloat(value.lng as unknown as string),
          };
          setCoordinates(coord);
          setValue?.(`${name}.location`, {
            type: 'Point',
            coordinates: [Object.values(coord)],
          });

          setValue?.(`${name}.geoCode`, data);

          // this is format address
          setValue?.(`${name}.formattedAddress`, data.display_name);
        }
      },
      onError: (error) => {
        toast.error(t('errors:location.noChangeLocation'));
        console.log(error);
      },
    },
  );

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <AddressMapInternationalFormFields addressFieldName={name} control={control} address={address} />
      </Grid>
      <Grid item xs={12} sx={{ position: 'relative', height: '300px', width: '100%' }}>
        <AddressMap
          lat={coordinates?.lat ?? CU_COORDINATES.lat}
          lng={coordinates?.lng ?? CU_COORDINATES.lng}
          className='w-full h-[300px]'
          isLoading={isGeoLoading}
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

export default AddressInternationalMapForm;
