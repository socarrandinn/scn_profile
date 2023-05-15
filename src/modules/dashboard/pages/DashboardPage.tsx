import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { Grid } from '@mui/material';
import { Advertisements } from 'modules/dashboard/components/Advertisements';

const DashboardPage = () => {
  return (
    <PageLayout sx={{ marginY: 3 }}>
      <Grid container spacing={2}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Advertisements />
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          bbb
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default memo(DashboardPage);
