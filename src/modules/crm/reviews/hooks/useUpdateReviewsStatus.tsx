import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { AdminReviewsService } from '../services';
import { ADMIN_REVIEWS_LIST_KEY } from '../constants';

const useUpdateReviewsStatus = (productId: string) => {
  const { t } = useTranslation(['reviews', 'errors']);
  const queryClient = useQueryClient();

  return useMutation((status: string) => AdminReviewsService.updateStatus(productId, status), {
    onSuccess: ({ data }: any) => {
      toast.success(
        t('statusUpdate.success', {
          ns: 'product',
          status: data.visible
            ? t('statusProduct.active', { ns: 'product' })
            : t('statusProduct.inactive', { ns: 'product' }),
        }),
      );
      queryClient.invalidateQueries([ADMIN_REVIEWS_LIST_KEY]);
      queryClient.invalidateQueries(data._id);
    },
    onError: () => {
      toast.error(t('generalErrorMessage', { ns: 'errors' }));
    },
  });
};

export default useUpdateReviewsStatus;
