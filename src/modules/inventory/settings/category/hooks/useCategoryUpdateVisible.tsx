import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { CategoryService } from '../services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CATEGORIES_LIST_KEY } from 'modules/inventory/settings/category/constants';

const useCategoryUpdateVisible = (categoryId: string) => {
  const { t } = useTranslation(['category', 'errors']);
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((visible: boolean) => CategoryService.update(categoryId, { visible }), {
    onSuccess: ({ data }: any) => {
      queryClient.invalidateQueries([CATEGORIES_LIST_KEY]);
      queryClient.invalidateQueries([categoryId]);
      toast.success(t('successUpdate'));
    },
    onError: () => {
      toast.error(t('generalErrorMessage', { ns: 'errors' }));
    },
  });

  return {
    updateVisible: mutate,
    isLoading,
  };
};

export default useCategoryUpdateVisible;
