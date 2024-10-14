import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { WarehousePickupService } from '../services';
import { STORE_PICKUP_ONE_KEY } from '../constants';

const useUpdatePickupPoint = () => {
  const { t } = useTranslation(['common', 'warehousePickup']);
  const queryClient = useQueryClient();

  return useMutation((enabled: boolean) => WarehousePickupService.updateStatus(enabled), {
    onSuccess: () => {
      toast.success(t('warehousePickup:pickupPoint.successUpdateStatus'));
      queryClient.invalidateQueries([STORE_PICKUP_ONE_KEY]);
    },
    onError: () => {
      toast.error(t('generalErrorMessage', { ns: 'errors' }));
    },
  });
};

export default useUpdatePickupPoint;
