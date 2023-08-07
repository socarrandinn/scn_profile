import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { PRODUCTS_LIST_KEY } from 'modules/provider/products/constants';
import { ProductsService } from 'modules/provider/products/services';

const useUpdateStatusProducts = (idProoviderProducts: string) => {
  const { t } = useTranslation('errors');
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((active: boolean) => ProductsService.update(idProoviderProducts, { active }), {
    onSuccess: ({ data }: any) => {
      queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
      queryClient.invalidateQueries([idProoviderProducts]);
      toast.success(t('successUpdate'));
    },
    onError: () => {
      toast.error(t('generalErrorMessage', { ns: 'errors' }));
    },
  })
  return {
    updateState: mutate,
    isLoading,
  };
}

export default useUpdateStatusProducts;
