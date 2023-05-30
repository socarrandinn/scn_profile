import { memo } from 'react';
import { PageLayout } from 'layouts/index';
// import { DashboardHeader } from 'components/libs/analytic/DashboardHeader';
import GeneralSummary from 'modules/rrhh/analytic/components/GeneralSummary/GeneralSummary';
import { DashboardProvider } from 'components/libs/analytic/DashboardProvider';
import CategoryDistribution from 'modules/rrhh/analytic/components/CategoryDistribution/CategoryDistribution';

const General = () => {
  return (
        <DashboardProvider id={'rrhh-general'}>
            <PageLayout mb={6}>
                {/* <DashboardHeader title={t('financialReport')} hasFilter/> */}
                {/* <FinancialReport/> */}
                <GeneralSummary/>
                <CategoryDistribution/>
            </PageLayout>
        </DashboardProvider>
  );
};

export default memo(General);
