import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { IStatus } from '@dfl/mui-react-common';
import { DistributionCentersService } from '../services';
import { DISTRIBUTION_CENTERS_LIST_KEY } from '../constants';
import { IDataSummary } from 'modules/common/interfaces/common-data-error';

export const useVisibilityManyDistributionCenters = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('distributionCenters');
  const { selected, clearSelection } = useTableSelection();

  const mutate = useMutation(
    (status: IStatus) => {
      if (selected && selected?.length) {
        return DistributionCentersService.changeVisibilityMany({
          ids: selected as string[],
          visible: status?._id === 'true',
        });
      }

      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: ({ data }: { data: IDataSummary }) => {
        if (data?.error === 0) {
          toast.success(t('successVisibilityMany'));
        }
        queryClient.invalidateQueries([DISTRIBUTION_CENTERS_LIST_KEY]);
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
