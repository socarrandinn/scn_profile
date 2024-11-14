import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { WarehouseSupplierService } from 'modules/inventory/warehouse/services';
import { WAREHOUSES_SUPPLIER_LIST_KEY } from 'modules/inventory/warehouse/constants';
import { IStatus } from '@dfl/mui-react-common';

export const useVisibilityManyWarehousesSupplier = (warehouseId: string) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('warehouse');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    (status: IStatus) => {
      if (selected && selected?.length) {
        return WarehouseSupplierService.changeVisibilityMany({
          ids: selected as string[],
          visible: status?._id === 'true',
          warehouse: warehouseId
        });
      }
      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successVisibilityMany'));
        clearSelection();
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
};
