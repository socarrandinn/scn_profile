import { memo } from 'react';
import { Grid } from '@mui/material';
import ChartInventory from './ChartInventory';
import ChartInventoryRate from './ChartInventoryRate';

const ChartContainerInventory = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2} marginTop={3} marginBottom={3}>
      <Grid item md={4} xs={12}>
        <ChartInventory />
      </Grid>
      <Grid item md={4} xs={12}>
        <ChartInventory />
      </Grid>
      <Grid item md={4} xs={12}>
        <ChartInventoryRate />
      </Grid>
    </Grid>
  );
};

export default memo(ChartContainerInventory);
