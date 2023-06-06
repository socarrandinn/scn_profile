import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import GeneralSummary from 'modules/rrhh/analytic/components/GeneralSummary/GeneralSummary';
import { DashboardProvider } from 'components/libs/analytic/DashboardProvider';
import CategoryDistribution from 'modules/rrhh/analytic/components/CategoryDistribution/CategoryDistribution';
import { Grid } from '@mui/material';
import TeamDistribution from 'modules/rrhh/analytic/components/TeamDistribution/TeamDistribution';
import PositionDistribution from 'modules/rrhh/analytic/components/PositionDistribution/PositionDistribution';

const spacing = {
  xs: 1,
  md: 3
}
const General = () => {
  return (
        <DashboardProvider id={'rrhh-general'}>
            <PageLayout mb={6}>
                {/* <DashboardHeader title={t('financialReport')} hasFilter/> */}
                {/* <FinancialReport/> */}
                <Grid container spacing={spacing}>
                    <Grid item md={12}>
                        <Grid container spacing={spacing}>
                            <Grid item xs={12}>
                                <GeneralSummary/>
                            </Grid>
                            <Grid item xs={12}>
                                <CategoryDistribution/>
                            </Grid>
                            <Grid item xs={12}>
                                <PositionDistribution/>
                            </Grid>
                            <Grid item xs={12}>
                                <TeamDistribution/>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item md={3}> */}

                    {/* </Grid> */}
                </Grid>
            </PageLayout>
        </DashboardProvider>
  );
};

export default memo(General);
