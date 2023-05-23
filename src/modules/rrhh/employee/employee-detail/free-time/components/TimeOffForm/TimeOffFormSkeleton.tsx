import { memo } from 'react';
import { Grid, Skeleton } from '@mui/material';

const TimeOffFormSkeleton = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 6 }}>
      <Grid item xs={6} mt={2}>
        <Skeleton variant='rectangular' height={35} animation='wave' />
      </Grid>
      <Grid item xs={6}>
        <Skeleton variant='rectangular' height={35} animation='wave' />
      </Grid>
      <Grid item xs={6} mt={2}>
        <Skeleton variant='rectangular' height={35} animation='wave' />
      </Grid>
      <Grid item xs={6}>
        <Skeleton variant='rectangular' height={35} animation='wave' />
      </Grid>
    </Grid>
  );
};

export default memo(TimeOffFormSkeleton);
