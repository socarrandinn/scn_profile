import { useDFLForm } from '@dfl/mui-react-common';
import { debounce } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { LeafletService } from 'modules/common/service';
import { Dispatch, SetStateAction, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

type Props = {
  name: string;
  setCoordinates?: Dispatch<SetStateAction<{ lat: number; lng: number } | null>>;
};
export const useGeoLocation = ({ name, setCoordinates }: Props) => {
  const { t } = useTranslation('errors');

  const { setValue } = useDFLForm();

  const isEmptyLocation = (obj: { lat: number; lng: number } | null) => {
    if (typeof obj?.lat !== 'number' || typeof obj?.lng !== 'number') return true;
    return obj?.lat === 0 && obj?.lng === 0;
  };

  const { mutate: getOneLocation, isLoading: isGetOneLocation } = useMutation(
    (formattedAddress: string) => LeafletService.getOneLocation(formattedAddress),
    {
      onSuccess: (data: any, _values) => {
        if (data) {
          setCoordinates?.(data);
          setValue?.(
            `${name}.location`,
            {
              type: 'Point',
              coordinates: [data?.lat || 0, data?.lng || 0],
            },
            // @ts-ignore
            { shouldDirty: true },
          );
        }
      },
      onError: (_error) => {
        toast.error(t('errors:location.noChangeLocation'));
      },
    },
  );

  /* debounce getOneLocation */
  const debouncedGetOneLocation = useMemo(
    () =>
      debounce((formattedAddress: string) => {
        getOneLocation(formattedAddress);
      }, 1000), // 1000ms de debounce
    [getOneLocation],
  );

  const { mutate: changeLocation, isLoading: isChangeLoading } = useMutation(
    (coordinates: { lat: number; lng: number }) => LeafletService.reverseGeoCode(coordinates?.lat, coordinates?.lng),
    {
      onSuccess: (data, _value) => {
        if (data) {
          const coord = {
            lat: parseFloat(data?.lat as unknown as string) || 0,
            lng: parseFloat(data?.lng as unknown as string) || 0,
          };
          setCoordinates?.(coord);
          setValue?.(
            `${name}.location`,
            {
              type: 'Point',
              coordinates: [coord?.lat || 0, coord?.lng || 0],
            },
            // @ts-ignore
            { shouldDirty: true },
          );
        }
      },
      onError: (_error) => {
        toast.error(t('errors:location.noChangeLocation'));
      },
    },
  );

  return {
    getOneLocation,
    debouncedGetOneLocation,
    changeLocation,
    isLoading: isGetOneLocation || isChangeLoading,
    isEmptyLocation,
  };
};
