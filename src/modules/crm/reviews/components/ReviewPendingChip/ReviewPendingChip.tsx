import { memo } from 'react';
import { Badge, Stack } from '@mui/material';
import { useFindReviewBadgeSummary } from '../../hooks/useFindReviewBadgeSummary';
import { RateReviewOutlined, ReportOutlined } from '@mui/icons-material';

const ReviewPendingChip = () => {
  const { isLoading, data } = useFindReviewBadgeSummary();
  if (isLoading || !data) return <></>;

  return (
    <Stack flexDirection={'row'} gap={2} alignItems={'center'} justifyContent={'center'}>
      <Badge color='primary' badgeContent={data?.pending} max={100}>
        <RateReviewOutlined fontSize='small' />
      </Badge>
      <Badge color='error' badgeContent={data?.reported} max={100}>
        <ReportOutlined fontSize='small' />
      </Badge>
    </Stack>
  );
};

export default memo(ReviewPendingChip);
