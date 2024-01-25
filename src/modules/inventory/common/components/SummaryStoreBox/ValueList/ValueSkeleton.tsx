import { Skeleton, Stack } from '@mui/material';
import { memo } from 'react';

const ValueSkeleton = () => {
  return (
    <Stack width={'100%'} gap={{ xs: 1, md: 2 }}>
      <Skeleton variant='text' />
      {Array(3)
        .fill('')
        .map((sk) => (
          <Stack key={sk} flexDirection={'row'}>
            <Skeleton variant='circular' height={35} width={35} />
            <Skeleton variant='rectangular' height={35} width={'100%'} sx={{ borderRadius: '0 12px 12px 0' }} />
          </Stack>
        ))}
    </Stack>
  );
};

export default memo(ValueSkeleton);
