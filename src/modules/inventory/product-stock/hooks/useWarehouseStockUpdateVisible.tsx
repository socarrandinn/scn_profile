import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WarehouseService } from 'modules/inventory/warehouse/services';
import { WAREHOUSE_PRODUCTS_STOCK } from 'modules/inventory/warehouse/constants';

const useWarehouseStockUpdateVisible = (warehouseId: string, productId: string) => {
  const { t } = useTranslation(['warehouse', 'errors']);
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, data } = useMutation(
    (visible: boolean) => WarehouseService.updateStockVisibility(warehouseId, productId, { visible }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([WAREHOUSE_PRODUCTS_STOCK]);
        toast.success(t('provider:visibilitySuccessUpdate'));
      },
      onError: () => {
        toast.error(t('generalErrorMessage', { ns: 'errors' }));
      },
    },
  );

  return {
    updateVisible: mutateAsync,
    isLoading,
    value: data?.data?.visible,
  };
};

export default useWarehouseStockUpdateVisible;
