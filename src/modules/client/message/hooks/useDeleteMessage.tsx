import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MessageService } from 'modules/client/message/services';
import { MESSAGES_LIST_KEY } from 'modules/client/message/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteMessage = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('message');
  return useMutation(() => MessageService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([MESSAGES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
