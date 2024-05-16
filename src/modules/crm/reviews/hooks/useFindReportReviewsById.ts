import { useQuery } from '@tanstack/react-query';
import { AdminReviewsService } from 'modules/crm/reviews/services';
import { ADMIN_REVIEWS_LIST_KEY } from 'modules/crm/reviews/constants';
import { useCallback } from 'react';

export const useFindReportReviewsById = (reviewId: string) => {
  const fetch = useCallback(() => AdminReviewsService.searchReportByReviewId(reviewId, {}), [reviewId]);

  return useQuery([ADMIN_REVIEWS_LIST_KEY, reviewId], fetch, { enabled: !!reviewId });
};
