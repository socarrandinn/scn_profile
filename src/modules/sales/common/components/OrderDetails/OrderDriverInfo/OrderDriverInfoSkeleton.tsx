import { Grid, Skeleton } from '@mui/material';

const OrderDriverInfoSkeleton = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Skeleton height={34} width={'100&'} />
      </Grid>
      <Grid item xs={12}>
        <Skeleton height={34} width={'100&'} />
      </Grid>
    </Grid>
  );
};

export default OrderDriverInfoSkeleton;
