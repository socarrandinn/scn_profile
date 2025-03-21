import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { Stack } from '@mui/material';
import { DashboardNoPermission } from 'components/DashboardNoPermission';
import { PageLayout } from 'layouts/index';
import OfferHistogram from 'modules/reports/components/offers/OfferHistogram';
import SaleOfferSummary from 'modules/reports/components/offers/SaleOfferSummary';
import { reportSaleOfferFilters } from 'modules/reports/constants/filters/report-sales-offer-activity.filters';
import { HeaderFilterContext } from 'modules/reports/contexts/HeaderFilterContext';
import OfferGeneralEditContainer from 'modules/sales-offer/offer/containers/sections/OfferGeneralEditContainer';
import OfferRuleEditContainer from 'modules/sales-offer/offer/containers/sections/OfferRuleEditContainer';
import { useOfferContext } from 'modules/sales-offer/offer/contexts/OfferContext';
import { useCallback } from 'react';

const OfferOrderReportContainer = () => {
  const { hasPermission } = useSecurity();
  const { state, onOneClose } = useOfferContext();
  // status edit
  const handleGeneralClose = useCallback(() => onOneClose?.('form_general'), [onOneClose]);
  const handleRulesClose = useCallback(() => onOneClose?.('form_rules'), [onOneClose]);

  if (state?.form_rules) return <OfferRuleEditContainer onClose={handleRulesClose} />;
  if (state?.form_general) return <OfferGeneralEditContainer onClose={handleGeneralClose} />;

  return (
    <PageLayout>
      <ConditionContainer active={hasPermission('REPORT_VIEW')} alternative={<DashboardNoPermission />}>
        <HeaderFilterContext
          title='report:filters'
          id='sales-offer-report'
          filters={reportSaleOfferFilters}
          intervalFilter={'createdAt'}
          showFilters
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
