import { memo } from 'react';
import { Badge, BadgeProps, Stack, styled } from '@mui/material';
import { useFindReviewBadgeSummary } from '../../hooks/useFindReviewBadgeSummary';
import { ReportOutlined } from '@mui/icons-material';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const ReviewPendingChip = () => {
  const { isLoading, data } = useFindReviewBadgeSummary();
  if (isLoading || !data) return <></>;

  return (
    <Stack flexDirection={'row'} gap={2} alignItems={'center'} justifyContent={'center'}>
      {/*  <StyledBadge color='primary' badgeContent={data?.pending} max={100}>
        <RateReviewOutlined fontSize='small' />
      </StyledBadge> */}
      <StyledBadge color='error' badgeContent={data?.reported} max={100}>
        <ReportOutlined fontSize='small' />
      </StyledBadge>
    </Stack>
  );
};

export default memo(ReviewPendingChip);
