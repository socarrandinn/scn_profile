import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { SupplierService } from 'modules/inventory/provider/supplier/services';
import { SUPPLIER_LIST_KEY } from 'modules/inventory/provider/supplier/constants';

export const useDeleteManyProducts = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('products');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    () => {
      if (selected && selected?.length) return SupplierService.deleteMany(selected as string[]);
      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successDeletedMany'));
        clearSelection();
        queryClient.invalidateQueries([SUPPLIER_LIST_KEY]);
      },
      onError: (error: any) => {
        if (error.reference === 'MD000') toast.error(t('common:errors.needSelection'));
        else {
          toast.error(t('common:errors.generalErrorMessage'));
        }
      },
    },
  );
};
