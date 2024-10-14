import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WarehouseService } from 'modules/inventory/warehouse/services';
import { WAREHOUSES_LIST_KEY, WAREHOUSES_PRODUCT_LIST_KEY } from 'modules/inventory/warehouse/constants';

const useStoreUpdateVisible = (warehouseId: string) => {
  const { t } = useTranslation(['store', 'errors']);
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((visible: boolean) => WarehouseService.updateVisibility(warehouseId, { visible }), {
    onSuccess: ({ data }: any) => {
      queryClient.invalidateQueries([WAREHOUSES_LIST_KEY]);
      queryClient.invalidateQueries([WAREHOUSES_PRODUCT_LIST_KEY]);
      queryClient.invalidateQueries([warehouseId]);
      toast.success(t('successUpdate'));
    },
    onError: () => {
      toast.error(t('generalErrorMessage', { ns: 'errors' }));
    },
  });

  return {
    updateVisible: mutate,
    isLoading,
  };
};

export default useStoreUpdateVisible;
