import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { WarehouseSupplierService } from 'modules/inventory/warehouse/services';
import { WAREHOUSES_SUPPLIER_LIST_KEY } from 'modules/inventory/warehouse/constants';
import { IDataSummary } from 'modules/common/interfaces/common-data-error';

export const useDeleteManyWarehousesSupplier = (warehouseId: string) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('supplier');
  const { selected, clearSelection } = useTableSelection();

  const mutate = useMutation(
    () => {
      if (selected && selected?.length) return WarehouseSupplierService.deleteMany(selected as string[], warehouseId);
      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: ({ data }: { data: IDataSummary }) => {
        if (data?.error === 0) {
          toast.success(t('successDeletedMany'));
        }
        queryClient.invalidateQueries([WAREHOUSES_SUPPLIER_LIST_KEY]);
      },
      onError: (error: any) => {
        if (error.reference === 'MD000') toast.error(t('common:errors.needSelection'));
        else {
          toast.error(t('common:errors.generalErrorMessage'));
        }
      },
    },
  );

  const reset = () => {
    mutate.reset();
    clearSelection();
  };

  return {
    ...mutate,
    reset,
  };
};
