import { useMemo } from 'react';
import { useStorePickupContext } from '../contexts/StorePickupContext';
import { IPlace } from '../interfaces';

export const useFindOnePlace = (placeId: string | null) => {
  const { places, isLoading, error } = useStorePickupContext();
  const place = useMemo(() => places?.find((p: IPlace) => p?._id === placeId), [places, placeId]);

  return {
    place,
    isLoading: isLoading || !place,
    error,
  };
};
