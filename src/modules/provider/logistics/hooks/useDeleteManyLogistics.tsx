import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { LogisticsService } from 'modules/provider/logistics/services';
import { LOGISTICS_LIST_KEY } from 'modules/provider/logistics/constants';

export const useDeleteManyLogistics = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('logistics');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    () => {
      if (selected && selected?.length) return LogisticsService.deleteMany(selected as string[]);
      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successDeletedMany'));
        clearSelection();
        queryClient.invalidateQueries([LOGISTICS_LIST_KEY]);
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
