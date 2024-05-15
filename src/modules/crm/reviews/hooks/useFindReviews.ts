import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { AdminReviewsService } from 'modules/crm/reviews/services';
import { ADMIN_REVIEWS_LIST_KEY } from 'modules/crm/reviews/constants';

export const useFindReviews = () => {
  const { fetch, queryKey } = useTableRequest(AdminReviewsService.search);

  return useQuery([ADMIN_REVIEWS_LIST_KEY, queryKey], fetch);
};
