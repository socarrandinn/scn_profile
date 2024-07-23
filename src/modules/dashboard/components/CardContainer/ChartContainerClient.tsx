import { Grid } from '@mui/material';
import React, { memo } from 'react';
import ChartHistogramClient from './ChartHistogramClient';

type ChartContainerClientProps = {
  histogram: Array<{ _id: string; count: number }>;
};

const ChartContainerClient: React.FC<ChartContainerClientProps> = ({ histogram }) => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2}>
      <Grid item xs={12}>
        <ChartHistogramClient data={histogram} />
      </Grid>
    </Grid>
  );
};

export default memo(ChartContainerClient);
