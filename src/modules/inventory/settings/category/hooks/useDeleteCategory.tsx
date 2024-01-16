import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CategoryService } from 'modules/inventory/settings/category/services';
import { CATEGORIES_LIST_KEY } from 'modules/inventory/settings/category/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

export const useDeleteCategory = (id: string, onClose: () => void, onRedirect?: boolean) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('category');
  const navigate = useNavigate();
  return useMutation(() => CategoryService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([CATEGORIES_LIST_KEY]);
      queryClient.invalidateQueries([id]);

      if (onRedirect) {
        navigate('/inventory/settings/categories');
      }
    },
  });
};
