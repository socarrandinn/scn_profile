import { Skeleton, Stack } from '@mui/material';
import React from 'react';

const RoleListSkeleton = () => {
  return (
    <Stack direction={'row'} gap={1} height={32}>
      <Skeleton variant='rounded' sx={{ borderRadius: 16 }} width={140} height={'100%'} />
      <Skeleton variant='rounded' sx={{ borderRadius: 16 }} width={140} height={32} />
    </Stack>
  );
};

export default RoleListSkeleton;
