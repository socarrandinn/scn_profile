import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { BannerService } from '../services';
import { BANNERS_LIST_KEY } from '../constants';

export const useDeleteBanner = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('banner');
  return useMutation(() => BannerService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([BANNERS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
