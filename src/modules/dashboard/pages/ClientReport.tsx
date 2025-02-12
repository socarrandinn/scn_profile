import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { PageLayout } from 'layouts/index';
import { memo } from 'react';
import { DashboardNoPermission } from '../../../components/DashboardNoPermission';
import { clientReportFilters } from '../constant/dashboard.filters';
import ClientReportContainer from '../containers/ClientReportContainer';
import { HeaderFilterContext } from 'modules/reports/contexts/HeaderFilterContext';

const ClientReport = () => {
  const { hasPermission } = useSecurity();

  return (
    <PageLayout>
      <ConditionContainer active={hasPermission('REPORT_VIEW_INVENTORY')} alternative={<DashboardNoPermission />}>
        <HeaderFilterContext
          title='report:report.client.title'
          id='dashboard-client-report'
          filters={clientReportFilters}
          intervalFilter={'createdAt'}
        >
          <ClientReportContainer />
        </HeaderFilterContext>
      </ConditionContainer>
    </PageLayout>
  );
};

export default memo(ClientReport);
