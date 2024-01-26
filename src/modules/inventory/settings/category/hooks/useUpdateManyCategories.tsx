import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { CategoryService } from 'modules/inventory/settings/category/services';
import { CATEGORIES_LIST_KEY } from 'modules/inventory/settings/category/constants';

export const useUpdateManyCategories = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('category');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    (visible: boolean) => {
      if (selected && selected?.length) return CategoryService.updateMany({ ids: selected, visible });
      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successUpdatedMany'));
        clearSelection();
        queryClient.invalidateQueries([CATEGORIES_LIST_KEY]);
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
