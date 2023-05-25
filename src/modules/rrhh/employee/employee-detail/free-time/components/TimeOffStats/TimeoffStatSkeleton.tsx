import { memo } from 'react';
import { Skeleton } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

const TimeOffStatSkeleton = () => {
  return (
    <FlexBox flexDirection={'column'} alignItems={'center'} gap={1}>
      <Skeleton variant='rectangular' width={40} height={10} />
      <Skeleton variant='rectangular' width={100} height={40} />
      <Skeleton variant='rectangular' width={60} height={10} />
    </FlexBox>
  );
};

export default memo(TimeOffStatSkeleton);
