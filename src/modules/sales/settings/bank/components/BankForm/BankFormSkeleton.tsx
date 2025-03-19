import { memo } from 'react';
import { Grid, Skeleton } from '@mui/material';

const BankFormSkeleton = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} mt={2}>
        <Skeleton variant='rectangular' height={35} animation='wave' />
      </Grid>
      <Grid item xs={12}>
        <Skeleton variant='rectangular' height={100} animation='wave' />
      </Grid>
      <Grid item xs={12}>
        <Skeleton variant='rectangular' height={100} animation='wave' />
      </Grid>
    </Grid>
  );
};

export default memo(BankFormSkeleton);
