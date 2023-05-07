import React, { memo, FC } from 'react';
import { Grid, Skeleton } from '@mui/material';

type Props = {
  count?: number;
};

const ContentMock: FC<Props> = ({ count }) => {
  return (
    <Grid container spacing={2} mt={1}>
      {[...Array(count)].map((_, index) => (
        <Grid item xs={12} key={index}>
          <Skeleton variant={'rectangular'} width='100%' height={28} animation={false} />
        </Grid>
      ))}
    </Grid>
  );
};

ContentMock.defaultProps = {
  count: 5,
};

export default memo(ContentMock);
