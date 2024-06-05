import { useQuery } from '@tanstack/react-query';
import { AdminReviewsService } from 'modules/crm/reviews/services';
import { REVIEW_REPORT_CAUSES_LIST_KEY } from 'modules/crm/reviews/constants';
import { useTableRequest } from '@dfl/mui-admin-layout';

export const useFindReportReviewsById = (reviewId: string) => {
  const { fetch, queryKey } = useTableRequest((payload) =>
    AdminReviewsService.searchReportByReviewId(reviewId, payload),
  );

  return useQuery([REVIEW_REPORT_CAUSES_LIST_KEY, queryKey, reviewId], fetch, { enabled: !!reviewId });
};
