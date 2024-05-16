import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { reportsReviewColumns } from 'modules/crm/reviews/constants/reviews.columns';
import { useReviewsReportDetailContext } from '../contexts/ReviewsReportDetail';
import { useFindReportReviewsById } from '../hooks/useFindReportReviewsById';

const ReportByReviewListContainer = () => {
  const { reviewId } = useReviewsReportDetailContext();
  const { isLoading, data, error } = useFindReportReviewsById(reviewId as string);
  return (
    <Box>
      <Table columns={reportsReviewColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} />
    </Box>
  );
};

export default memo(ReportByReviewListContainer);
