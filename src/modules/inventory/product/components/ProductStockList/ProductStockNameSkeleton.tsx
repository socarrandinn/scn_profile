import { memo } from 'react';
import { Stack, styled, Avatar, Skeleton } from '@mui/material';

export const ProductMedia = styled(Avatar)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
}));

const ProductStockNameSkeleton = () => {
  return (
    <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
      <Skeleton
        variant='rectangular'
        sx={{
          width: 40,
          height: 40,
        }}
      />
      <Stack alignItems={'start'} width={'100%'}>
        <Skeleton width={'80%'} variant='text' sx={{ fontSize: '1rem' }} />
        <Skeleton width={'60%'} variant='text' sx={{ fontSize: '0.8rem' }} />
      </Stack>
    </Stack>
  );
};

export default memo(ProductStockNameSkeleton);
