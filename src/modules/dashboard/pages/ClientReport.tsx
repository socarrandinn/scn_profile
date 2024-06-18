import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { PageLayout, PagePaperLayout } from 'layouts/index';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import DashboardNoPermissionContainer from '../../../components/DashboardNoPermissionContainer';
import ChartContainerClient from '../components/CardContainer/ChartContainerClient';
import ContainerTableClient from '../components/ContainerTableClient/ContainerTableClient';
import SummaryReportClient from '../components/SummaryReportClient/SummaryReportClient';
import useUsersMetricService from '../hooks/useUsersMetricService';

const ClientReport = () => {
  const { hasPermission } = useSecurity();
  const { t } = useTranslation('report');
  const { data } = useUsersMetricService();

  return (
    <PageLayout>
      <ConditionContainer
        active={hasPermission('REPORT_VIEW_INVENTORY')}
        alternative={<DashboardNoPermissionContainer />}
      >
        <PagePaperLayout title={t('report.client.title')}>
          <SummaryReportClient summary={data?.summary[0]} />
        </PagePaperLayout>
        <ChartContainerClient histogram={data?.Histogram} />
        <ContainerTableClient data={data?.['Last 10 Users']} />
      </ConditionContainer>
    </PageLayout>
  );
};

export default memo(ClientReport);
