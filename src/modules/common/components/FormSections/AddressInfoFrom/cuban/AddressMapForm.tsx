import { useDFLForm } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import AddressMapFormFields from 'components/AddressMapFormFields/AddressMapFormFields';
import { IAddress } from 'modules/common/interfaces';
import { useCallback, useEffect, useState } from 'react';
import { Control, useWatch } from 'react-hook-form';
import useFindCuLocation from 'modules/common/components/FormSections/AddressInfoFrom/hooks/useFindCuLocation';
import AddressMapContainer from 'modules/common/components/FormSections/AddressInfoFrom/MapContainer';
import useFindCuReverseLocation from 'modules/common/components/FormSections/AddressInfoFrom/hooks/useFindCuReverseLocation';

type AddressInfoProps = {
  countryCode: string;
  name?: string;
  required?: boolean;
  hideZip?: boolean;
  control?: Control<any, any>;
  collapsibleMap?: boolean;
  disabledFields?: string[];
};

const AddressMapForm = ({
  countryCode,
  name = 'address',
  control,
  collapsibleMap,
  disabledFields,
}: AddressInfoProps) => {
  const address = useWatch({ control, name }) as IAddress;
  const { setValue } = useDFLForm();
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);

  const [updateMarker, setUpdateMarker] = useState<boolean>(false);

  const { data: cuLocation, isLoading } = useFindCuLocation({ address });
  const { data: cuPoi, isLoading: isLoadingCuPoi } = useFindCuReverseLocation({
    lng: coordinates?.lng,
    lat: coordinates?.lat,
    countryCode,
    updateMarker,
  });

  const [marker, setMarker] = useState<[number, number]>([0, 0]);
  const [isMarkerUpdatedManually, setIsMarkerUpdatedManually] = useState(false);

  useEffect(() => {
    if (countryCode === 'CU' && !isLoading && cuLocation?.coordinates?.[0] && cuLocation?.coordinates?.[1] && !isMarkerUpdatedManually) {
      const newMarker: [number, number] = [+cuLocation?.coordinates?.[1], +cuLocation?.coordinates?.[0]];

      // Update only if the coordinates are different
      if (marker[0] !== newMarker[0] || marker[1] !== newMarker[1]) {
        setValue?.('address.location.coordinates', newMarker);
        setMarker(newMarker);
        setIsMarkerUpdatedManually(false); // Restablecer el estado manual
      }
    }
  }, [countryCode, cuLocation?.coordinates, isLoading, isMarkerUpdatedManually, marker, setValue]);

  useEffect(() => {
    if (updateMarker && cuPoi > 0 && !isLoadingCuPoi) {
      if (cuPoi?.data?.mainStreet?.code) {
        setValue?.('address.address1', cuPoi?.address1);
      }
      if (cuPoi?.data?.street?.code) {
        setValue?.('address.address2', cuPoi?.address2);
      }
      if (cuPoi?.data?.municipality?.code) {
        setValue?.('address.city', cuPoi?.city);
      }
      if (cuPoi?.data?.province?.code) {
        setValue?.('address.state', cuPoi?.state);
      }
    }
  }, [cuPoi, isLoadingCuPoi, setValue, updateMarker]);

  useEffect(() => {
    if (cuPoi?.data?.length > 0) {
      setUpdateMarker(false);
    }
  }, [cuPoi?.data]);

  useEffect(() => {
    if (address?.location?.coordinates) {
      setCoordinates({
        lat: address?.location?.coordinates[0] as number,
        lng: address?.location?.coordinates[1] as number,
      });
    }
  }, [address?._id, address?.location?.coordinates]);

  const changeLocation = useCallback(
    (position: any) => {
      const coord = {
        lat: parseFloat(position?.lat as unknown as string) || 0,
        lng: parseFloat(position?.lng as unknown as string) || 0,
      };
      setCoordinates?.(coord);
      setUpdateMarker(true);
      setValue?.(
        `${name}.location`,
        {
          type: 'Point',
          coordinates: [coord?.lat || 0, coord?.lng || 0],
        },
        // @ts-ignore
        { shouldDirty: true },
      );
    },
    [name, setValue],
  );

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <AddressMapFormFields
          addressFieldName={name}
          control={control}
          address={address}
          disabledFields={disabledFields}
        />
      </Grid>
      <Grid item xs={12} sx={{ position: 'relative', width: '100%' }}>
        <AddressMapContainer
          collapsibleMap={collapsibleMap}
          coordinates={coordinates}
          setCoordinates={changeLocation}
        />
      </Grid>
    </Grid>
  );
};

export default AddressMapForm;
