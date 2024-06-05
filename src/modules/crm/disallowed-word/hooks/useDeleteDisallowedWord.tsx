import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DisallowedWordService } from 'modules/crm/disallowed-word/services';
import { DISALLOWED_WORDS_LIST_KEY } from 'modules/crm/disallowed-word/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteDisallowedWord = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('disallowedWord');
  return useMutation(() => DisallowedWordService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([DISALLOWED_WORDS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
