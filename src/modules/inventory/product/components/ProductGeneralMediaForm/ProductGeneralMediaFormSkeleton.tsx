import { memo } from 'react';
import { Grid, Skeleton } from '@mui/material';

const ProductGeneralMediaSkeleton = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} mt={2}>
        <Skeleton variant='rectangular' height={55} animation='wave' />
      </Grid>
    </Grid>
  );
};

export default memo(ProductGeneralMediaSkeleton);
