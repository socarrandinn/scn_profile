import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { DistributionCentersService } from '../services';
import { DISTRIBUTION_CENTER_WAREHOUSE_LIST_KEY } from '../constants';

export const useDeleteDistributionCenterWarehouse = (
  distributionCenterId: string,
  warehouseId: string,
  onClose: () => void,
) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('distributionCenter');
  return useMutation(() => DistributionCentersService.deleteWarehouse(distributionCenterId, warehouseId), {
    onSuccess: (data) => {
      toast.success(t('successWarehouseDeleted'));
      onClose?.();
      queryClient.invalidateQueries([DISTRIBUTION_CENTER_WAREHOUSE_LIST_KEY]);
      queryClient.invalidateQueries([warehouseId]);
      queryClient.invalidateQueries([distributionCenterId]);
    },
  });
};
