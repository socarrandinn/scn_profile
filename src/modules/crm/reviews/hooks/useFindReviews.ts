import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ReviewsService } from 'modules/crm/reviews/services';
import { REVIEWS_LIST_KEY } from 'modules/crm/reviews/constants';

export const useFindReviews = () => {
  const { fetch, queryKey } = useTableRequest(ReviewsService.search);

  return useQuery([REVIEWS_LIST_KEY, queryKey], fetch);
};
