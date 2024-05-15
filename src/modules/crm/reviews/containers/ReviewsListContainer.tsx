import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindReviews } from 'modules/crm/reviews/hooks/useFindReviews';
import { reviewsColumns } from 'modules/crm/reviews/constants/reviews.columns';
import { ReviewsListToolbar } from 'modules/crm/reviews/components/ReviewsListToolbar';
import ReviewsEditModal from 'modules/crm/reviews/containers/ReviewsEditModal';

const ReviewsListContainer = () => {
  const { isLoading, error, data } = useFindReviews();
  return (
    <Box>
      <ReviewsListToolbar />
      <Table
        columns={reviewsColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <ReviewsEditModal />
    </Box>
  );
};

export default memo(ReviewsListContainer);
