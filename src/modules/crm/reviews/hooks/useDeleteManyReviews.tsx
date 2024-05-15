import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { ReviewsService } from 'modules/crm/reviews/services';
import { REVIEWS_LIST_KEY } from 'modules/crm/reviews/constants';

export const useDeleteManyReviews = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('reviews');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    () => {
      if (selected && selected?.length) return ReviewsService.deleteMany(selected as string[]);
      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successDeletedMany'));
        clearSelection();
        queryClient.invalidateQueries([REVIEWS_LIST_KEY]);
      },
      onError: (error: any) => {
        if (error.reference === 'MD000') toast.error(t('common:errors.needSelection'));
        else {
          toast.error(t('common:errors.generalErrorMessage'));
        }
      },
    },
  );
};
