import { memo } from 'react';
import { Skeleton } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import styled from '@emotion/styled';
import LegendToggleOutlinedIcon from '@mui/icons-material/LegendToggleOutlined';

const SFlexBox = styled(FlexBox)(() => ({
  '> svg': {
    fontSize: '3rem',
  },
}));

const ChartSkeleton = ({ icon = <LegendToggleOutlinedIcon /> }: { icon?: any }) => {
  return (
    <FlexBox
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      px={6}
      height={'100%'}
      sx={{ minHeight: 350 }}
    >
      <Skeleton width={'100%'} height={'10%'} />
      <Skeleton width={'100%'} height={'10%'} />
      <Skeleton width={'100%'} height={'10%'} />
      <SFlexBox sx={{ opacity: 0.5, fontSize: 40 }}>{icon}</SFlexBox>
      <Skeleton width={'100%'} height={'10%'} />
      <Skeleton width={'100%'} height={'10%'} />
      <Skeleton width={'100%'} height={'10%'} />
    </FlexBox>
  );
};

export default memo(ChartSkeleton);
