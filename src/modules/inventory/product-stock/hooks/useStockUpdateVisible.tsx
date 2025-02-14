import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { StockService } from 'modules/inventory/warehouse/services';
import { PRODUCTS_WAREHOUSE_STOCK } from '../constants/query-keys';

const useStockUpdateVisible = (productId: string, stockId: string) => {
  const { t } = useTranslation(['warehouse', 'errors']);
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, data } = useMutation(
    (visible: boolean) => StockService.updateVisibility(productId, stockId, { visible }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([PRODUCTS_WAREHOUSE_STOCK]);
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

export default useStockUpdateVisible;
