import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WarehouseAreaService } from 'modules/inventory/settings/warehouse-area/services';
import { WAREHOUSE_AREAS_LIST_KEY } from 'modules/inventory/settings/warehouse-area/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteStoreArea = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('warehouseArea');
  return useMutation(() => WarehouseAreaService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([WAREHOUSE_AREAS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
