import { memo } from 'react';
import { Grid, Skeleton } from '@mui/material';

const TagsFormSkeleton = () => {
  return (
    <>
      {Array(5)
        .fill('')
        .map((sk, index) => (
          <Grid key={sk} item xs={12} mt={index > 0 ? 1 : 0}>
            <Skeleton variant='rectangular' height={35} animation='wave' />
          </Grid>
        ))}
    </>
  );
};

export default memo(TagsFormSkeleton);
