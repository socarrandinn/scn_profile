import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { MediaService } from '../services';
import { MEDIA_LIST_KEY } from '../constants/medias.queries';

export const useDeleteMedia = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('media');
  return useMutation(() => MediaService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([MEDIA_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
