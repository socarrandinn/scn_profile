import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WarehouseSupplierService } from 'modules/inventory/warehouse/services';
import { WAREHOUSES_SUPPLIER_LIST_KEY } from 'modules/inventory/warehouse/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteWarehouseSupplier = (supplierId: string, warehouseId: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('warehouse');
  return useMutation(() => WarehouseSupplierService.deleteSupplier(warehouseId, supplierId), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([WAREHOUSES_SUPPLIER_LIST_KEY]);
      queryClient.invalidateQueries([supplierId, warehouseId]);
    },
  });
};
