import { Grid, Skeleton } from '@mui/material';
import { memo } from 'react';

const WarehouseDistributionCenterSkeleton = () => {
  return (
    <Grid container spacing={1}>
      {Array(5)
        .fill('')
        .map((sk) => (
          <Grid key={sk} item xs={12} md={6}>
            <Skeleton sx={{ width: '100%', height: 35 }} variant='rounded' animation='wave' />
          </Grid>
        ))}
    </Grid>
  );
};

export default memo(WarehouseDistributionCenterSkeleton);
