import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { NotificationService } from '../services';
import { NOTIFICATION_LIST_KEY } from '../constants/query';

export const useDeleteNotification = (id: string) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('notification');

  return useMutation(() => NotificationService.deleteNotification(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      queryClient.invalidateQueries([NOTIFICATION_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
