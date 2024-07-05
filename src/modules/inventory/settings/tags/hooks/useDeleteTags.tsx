import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TagsService } from 'modules/inventory/settings/tags/services';
import { TAGS_LIST_KEY } from 'modules/inventory/settings/tags/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteTags = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('tags');
  return useMutation(() => TagsService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([TAGS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
