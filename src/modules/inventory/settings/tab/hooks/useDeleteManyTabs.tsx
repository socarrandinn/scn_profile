import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { TabService } from 'modules/inventory/settings/tab/services';
import { TABS_LIST_KEY } from 'modules/inventory/settings/tab/constants';

export const useDeleteManyTabs = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('tab');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    () => {
      if (selected && selected?.length) return TabService.deleteMany(selected as string[]);
      return Promise.reject({ message: t('deleteMany'), reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successDeletedMany'));
        clearSelection();
        queryClient.invalidateQueries([TABS_LIST_KEY]);
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
