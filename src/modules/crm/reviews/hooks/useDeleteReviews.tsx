import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AdminReviewsService } from 'modules/crm/reviews/services';
import { ADMIN_REVIEWS_LIST_KEY } from 'modules/crm/reviews/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteReviews = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('reviews');
  return useMutation(() => AdminReviewsService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([ADMIN_REVIEWS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
