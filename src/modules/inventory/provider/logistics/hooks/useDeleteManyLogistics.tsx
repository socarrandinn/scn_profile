import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { IDataSummary } from 'modules/common/interfaces/common-data-error';
import { LogisticsService } from '../services';
import { LOGISTICS_LIST_KEY } from '../constants';

export const useDeleteManyLogistics = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('logistics');
  const { selected, clearSelection } = useTableSelection();

  const mutate = useMutation(
    () => {
      if (selected && selected?.length) return LogisticsService.deleteMany(selected as string[]);
      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: ({ data }: { data: IDataSummary }) => {
        if (data?.error === 0) {
          toast.success(t('successDeletedMany'));
        }
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
  const reset = () => {
    mutate.reset();
    clearSelection();
  };

  return {
    ...mutate,
    reset,
  };
};
