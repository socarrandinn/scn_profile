import React, { memo, FC } from 'react';
import { Grid, Skeleton } from '@mui/material';

const ContentMock: FC = () => {
  return (
    <Grid container spacing={2} mt={1}>
      {[...Array(5)].map((_, index) => (
        <Grid item xs={12} key={index}>
          <Skeleton variant={'rectangular'} width='100%' height={28} animation={false} />
        </Grid>
      ))}
    </Grid>
  );
};

ContentMock.defaultProps = {};

export default memo(ContentMock);
