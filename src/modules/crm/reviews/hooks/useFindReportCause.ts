import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { AdminReviewsService } from 'modules/crm/reviews/services';
import { REVIEW_REPORT_CAUSES_LIST_KEY } from 'modules/crm/reviews/constants';

export const useFindReportCause = (open: boolean) => {
  const { fetch, queryKey } = useTableRequest(AdminReviewsService.searchReportCause);

  return useQuery([REVIEW_REPORT_CAUSES_LIST_KEY, queryKey], fetch, { enabled: open });
};
