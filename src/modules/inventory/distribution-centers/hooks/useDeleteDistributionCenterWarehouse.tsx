import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { DistributionCentersService } from '../services';
import { DISTRIBUTION_CENTER_WAREHOUSE_LIST_KEY } from '../constants';

export const useDeleteDistributionCenterWarehouse = (
  distributionCenterId: string,
  warehouses: string[],
  onClose: () => void,
) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('distributionCenters');
  return useMutation(() => DistributionCentersService.removeWarehouse(distributionCenterId, warehouses), {
    onSuccess: (data) => {
      toast.success(t('successWarehouseDeleted'));
      onClose?.();
      queryClient.invalidateQueries([DISTRIBUTION_CENTER_WAREHOUSE_LIST_KEY]);
      queryClient.invalidateQueries([warehouses]);
      queryClient.invalidateQueries([distributionCenterId]);
    },
  });
};
