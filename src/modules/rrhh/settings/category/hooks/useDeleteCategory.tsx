import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CategoryService } from 'modules/rrhh/settings/category/services';
import { CATEGORIES_LIST_KEY } from 'modules/rrhh/settings/category/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteCategory = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('category');
  return useMutation(() => CategoryService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([CATEGORIES_LIST_KEY]);
      queryClient.invalidateQueries(data._id);
    },
  });
};
