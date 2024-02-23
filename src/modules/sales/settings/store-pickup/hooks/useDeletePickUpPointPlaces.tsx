import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { STORE_PICKUP_ONE_KEY } from '../constants';
import storePickupPlacesService from '../services/store-pickup-places.service';

export const useDeletePickUpPointPlaces = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('storePickup');

  return useMutation(() => storePickupPlacesService.delete(id), {
    onSuccess: () => {
      toast.success(t('pickupPoint.successPlaceDeleted'));
      onClose?.();
      queryClient.invalidateQueries([STORE_PICKUP_ONE_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
