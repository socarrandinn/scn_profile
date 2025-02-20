import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { Stack } from '@mui/material';
import { DashboardNoPermission } from 'components/DashboardNoPermission';
import { PageLayout } from 'layouts/index';
import OfferHistogram from 'modules/reports/components/offers/OfferHistogram';
import SaleOfferSummary from 'modules/reports/components/offers/SaleOfferSummary';
import { reportSaleOfferFilters } from 'modules/reports/constants/filters/report-sales-offer-activity.filters';
import { HeaderFilterContext } from 'modules/reports/contexts/HeaderFilterContext';

const OfferOrderReportContainer = () => {
  const { hasPermission } = useSecurity();
  return (
    <PageLayout>
      <ConditionContainer active={hasPermission('REPORT_VIEW')} alternative={<DashboardNoPermission />}>
        <HeaderFilterContext
          title='report:filters'
          id='sales-offer-report'
          filters={reportSaleOfferFilters}
          intervalFilter={'createdAt'}
          showFilters
          // defaultValue='daily'
        >
          <Stack gap={{ xs: 1, md: 2 }} mt={{ xs: 1, md: 2 }}>
            <SaleOfferSummary />
            <OfferHistogram />
          </Stack>
        </HeaderFilterContext>
      </ConditionContainer>
    </PageLayout>
  );
};

export default OfferOrderReportContainer;
