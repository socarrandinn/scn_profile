import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PageService } from 'modules/cms/page/services';
import { PAGES_LIST_KEY } from 'modules/cms/page/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeletePage = (id: string, onClose?: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('page');
  return useMutation(() => PageService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([PAGES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
