import { memo } from 'react';
import { Skeleton } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

const CubaMapSkeleton = () => {
  return (
    <FlexBox justifyContent={'center'} alignItems={'center'} flexDirection={'column'} px={6} height={'55%'}>
      <Skeleton width={'40%'} height={150} />
    </FlexBox>
  );
};

export default memo(CubaMapSkeleton);
