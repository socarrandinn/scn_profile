import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useReviewsReportDetailContext } from '../contexts/ReviewsReportDetail';
import { useFindReportReviewsById } from '../hooks/useFindReportReviewsById';
import { ReviewsReportListToolbar } from '../components/ReviewsReportListToolbar';
import { reportsReviewColumns } from '../constants/reviews-report.columns';

const ReportByReviewListContainer = () => {
  const { reviewId } = useReviewsReportDetailContext();
  const { isLoading, data, error } = useFindReportReviewsById(reviewId as string);
  return (
    <Box>
      <ReviewsReportListToolbar />
      <Table columns={reportsReviewColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} />
    </Box>
  );
};

export default memo(ReportByReviewListContainer);
