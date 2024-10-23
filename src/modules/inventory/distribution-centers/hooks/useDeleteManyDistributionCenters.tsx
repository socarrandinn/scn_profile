import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';
import { DISTRIBUTION_CENTERS_LIST_KEY } from 'modules/inventory/distribution-centers/constants';

export const useDeleteManyDistributionCenters = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('distributionCenters');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    () => {
      if (selected && selected?.length) return DistributionCentersService.deleteMany(selected as string[]);
      return Promise.reject({ message: t('deleteMany'), reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successDeletedMany'));
        clearSelection();
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
};
