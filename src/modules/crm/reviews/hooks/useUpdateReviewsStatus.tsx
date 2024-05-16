import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { AdminReviewsService } from '../services';
import { ADMIN_REVIEWS_LIST_KEY } from '../constants';

const useUpdateReviewsStatus = (productId: string, onCauseClose?: () => void) => {
  const { t } = useTranslation(['reviews', 'errors']);
  const queryClient = useQueryClient();

  return useMutation(
    (params: { status: string; cause: string | undefined }) => AdminReviewsService.updateStatus(productId, params),
    {
      onSuccess: () => {
        toast.success(t('statusUpdate.success'));
        queryClient.invalidateQueries([ADMIN_REVIEWS_LIST_KEY]);
        onCauseClose?.();
      },
      onError: () => {
        toast.error(t('generalErrorMessage', { ns: 'errors' }));
      },
    },
  );
};

export default useUpdateReviewsStatus;
