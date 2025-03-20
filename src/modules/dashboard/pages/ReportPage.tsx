import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { PageLayout, PagePaperLayout } from 'layouts/index';
import { memo } from 'react';
import { DashboardNoPermission } from '../../../components/DashboardNoPermission';
import { useTranslation } from 'react-i18next';
import SummaryReportInventory from '../components/SummaryReportInventory/SummaryReportInventory';
import ChartContainerInventory from '../components/CardContainer/ChartContainerInventory';
import ContainerInventory from '../components/ContainerInventory/ContainerInventory';

const ReportPage = () => {
  const { hasPermission } = useSecurity();
  const { t } = useTranslation('report');
  return (
    <PageLayout>
      <ConditionContainer active={hasPermission('REPORT_VIEW_INVENTORY')} alternative={<DashboardNoPermission />}>
        <PagePaperLayout title={t('report.inventory.title')}>
          <SummaryReportInventory />
        </PagePaperLayout>
        <ChartContainerInventory />
        <ContainerInventory />
      </ConditionContainer>
    </PageLayout>
  );
};

export default memo(ReportPage);
