import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { Stack } from '@mui/material';
import { DashboardNoPermission } from 'components/DashboardNoPermission';
import { PageLayout } from 'layouts/index';
import ReportProductInventorySummary from 'modules/reports/components/product/ReportProductInventorySummary';
import ReportProductInventorySummaryWarehouses from 'modules/reports/components/product/ReportProductInventorySummaryWarehouses';
import ReportStockActivityTopContainer from 'modules/reports/components/product/ReportStockActivityTopContainer';
import { reportProductInventoryFilters } from 'modules/reports/constants/filters/report-stock-activity.filters';

import { HeaderFilterContext } from 'modules/reports/contexts/HeaderFilterContext';
import { memo } from 'react';

const InventoryReportContainer = () => {
  const { hasPermission } = useSecurity();

  return (
    <PageLayout>
      <ConditionContainer active={hasPermission('REPORT_VIEW_INVENTORY')} alternative={<DashboardNoPermission />}>
        <Stack my={{ xs: 1, md: 2 }} gap={{ xs: 1, md: 2 }}>
          <ReportProductInventorySummary />
          <ReportProductInventorySummaryWarehouses />
        </Stack>
        <HeaderFilterContext
          title='report:report.inventory.title'
          id='product-inventory-report'
          filters={reportProductInventoryFilters}
          intervalFilter={'createdAt'}
        >
          <Stack mt={{ xs: 1, md: 2 }} gap={{ xs: 1, md: 2 }}>
            <ReportStockActivityTopContainer />
          </Stack>
        </HeaderFilterContext>
      </ConditionContainer>
    </PageLayout>
  );
};

export default memo(InventoryReportContainer);
