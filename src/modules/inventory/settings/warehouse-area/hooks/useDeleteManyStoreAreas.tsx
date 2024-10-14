import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { WarehouseAreaService } from 'modules/inventory/settings/warehouse-area/services';
import { WAREHOUSE_AREAS_LIST_KEY } from 'modules/inventory/settings/warehouse-area/constants';

export const useDeleteManyStoreAreas = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('warehouseArea');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    () => {
      if (selected && selected?.length) return WarehouseAreaService.deleteMany(selected as string[]);
      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successDeletedMany'));
        clearSelection();
        queryClient.invalidateQueries([WAREHOUSE_AREAS_LIST_KEY]);
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
