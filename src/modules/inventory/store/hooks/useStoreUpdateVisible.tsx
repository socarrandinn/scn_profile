import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { StoreService } from 'modules/inventory/store/services';
import { STORES_LIST_KEY, STORES_PRODUCT_LIST_KEY } from 'modules/inventory/store/constants';

const useStoreUpdateVisible = (storeId: string) => {
  const { t } = useTranslation(['store', 'errors']);
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((visible: boolean) => StoreService.update(storeId, { visible }), {
    onSuccess: ({ data }: any) => {
      queryClient.invalidateQueries([STORES_LIST_KEY]);
      queryClient.invalidateQueries([STORES_PRODUCT_LIST_KEY]);
      queryClient.invalidateQueries([storeId]);
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
