import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { SUPPLIER_LIST_KEY } from 'modules/inventory/provider/supplier/constants';
import { SupplierService } from 'modules/inventory/provider/supplier/services';

const useUpdateStatusProducts = (idProviderProducts: string) => {
  const { t } = useTranslation('errors');
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (active: boolean) => SupplierService.update(idProviderProducts, { active }),
    {
      onSuccess: ({ data }: any) => {
        queryClient.invalidateQueries([SUPPLIER_LIST_KEY]);
        queryClient.invalidateQueries([idProviderProducts]);
        toast.success(t('successUpdate'));
      },
      onError: () => {
        toast.error(t('generalErrorMessage', { ns: 'errors' }));
      },
    },
  );
  return {
    updateState: mutate,
    isLoading,
  };
};

export default useUpdateStatusProducts;
