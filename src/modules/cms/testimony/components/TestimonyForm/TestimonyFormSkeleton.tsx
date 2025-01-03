import { memo } from 'react';
import { Grid, Skeleton } from '@mui/material';

const TestimonyFormSkeleton = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} display={'flex'} justifyContent={'center'}>
        <Skeleton variant='circular' height={100} width={100} animation='wave' />
      </Grid>
      <Grid item xs={12}>
        <Skeleton variant='rectangular' height={35} animation='wave' />
      </Grid>
      <Grid item xs={12}>
        <Skeleton variant='rectangular' height={35} animation='wave' />
      </Grid>
      <Grid item xs={12}>
        <Skeleton variant='rectangular' height={100} animation='wave' />
      </Grid>
    </Grid>
  );
};

export default memo(TestimonyFormSkeleton);
