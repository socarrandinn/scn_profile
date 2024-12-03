import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { WarehouseSupplierService } from '../services';

const useWarehouseSupplierUpdateVisibility = (warehouseId: string, supplierId: string, onClose?: () => void) => {
  const { t } = useTranslation(['provider', 'errors']);
  // const queryClient = useQueryClient();

  return useMutation(
    (visible: boolean) => WarehouseSupplierService.updateVisibility(warehouseId, supplierId, { visible }),
    {
      onSuccess: () => {
        // queryClient.invalidateQueries([WAREHOUSES_SUPPLIER_LIST_KEY]);
        toast.success(t('provider:visibilitySuccessUpdate'));
        onClose?.();
      },
      onError: () => {
        toast.error(t('generalErrorMessage', { ns: 'errors' }));
      },
    },
  );
};

export default useWarehouseSupplierUpdateVisibility;
