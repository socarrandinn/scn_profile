import { memo } from 'react';
import { Grid, Skeleton } from '@mui/material';

const SupplierTagsFormSkeleton = () => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }}>
      <Grid item xs={12} mt={2}>
        <Skeleton variant='rectangular' height={35} animation='wave' />
      </Grid>
      <Grid item xs={12}>
        <Skeleton variant='rectangular' height={35} animation='wave' />
      </Grid>
      <Grid item xs={12}>
        <Skeleton variant='rectangular' height={35} animation='wave' />
      </Grid>
      <Grid item xs={12}>
        <Skeleton variant='rectangular' height={35} animation='wave' />
      </Grid>
    </Grid>
  );
};

export default memo(SupplierTagsFormSkeleton);
