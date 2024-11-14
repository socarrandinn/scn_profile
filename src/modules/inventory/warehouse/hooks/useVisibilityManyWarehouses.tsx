import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { WarehouseService } from 'modules/inventory/warehouse/services';
import { WAREHOUSES_LIST_KEY } from 'modules/inventory/warehouse/constants';
import { IStatus } from '@dfl/mui-react-common';

export const useVisibilityManyWarehouses = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('warehouse');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    (status: IStatus) => {
      if (selected && selected?.length) {
        return WarehouseService.changeVisibilityMany({
          ids: selected as string[],
          visible: status?._id === 'true',
        });
      }

      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successVisibilityMany'));
        clearSelection();
        queryClient.invalidateQueries([WAREHOUSES_LIST_KEY]);
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
