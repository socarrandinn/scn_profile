import { memo } from 'react';
import { useSecurity } from '@dfl/react-security';
import { SUPPLIER_PERMISSIONS, supplierReportSaleFilters } from '../../constants';
import { ConditionContainer } from '@dfl/mui-react-common';
import { ReportSaleProvider } from '../../context/ReportSaleProvider';
import { DashboardHeader } from 'components/libs/analytic/DashboardHeader';
import { PageLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import { SupplierReportSaleSummary } from '../../components/SupplierReportSaleSummary';
import { SupplierReportSaleByLocationBarChart } from '../../components/SupplierReportSaleByLocationBarChart';
import { SupplierReportSalePercentByLocation } from '../../components/SupplierReportSalePercentByLocation';
import { SupplierReportSaleByDayBarChart } from '../../components/SupplierReportSaleByDayBarChart';
import SupplierReportSaleByCountryBarChart from '../../components/SupplierReportSaleByCountryBarChart/SupplierReportSaleByCountryBarChart';

const SupplierReportSalePage = () => {
  const { t } = useTranslation('providerAnalytic');
  const { hasPermission } = useSecurity();
  return (
    <ConditionContainer active={hasPermission(SUPPLIER_PERMISSIONS.SUPPLIER_VIEW)} alternative={<></>}>
      <ReportSaleProvider id={'supplier-report-sales'} filters={supplierReportSaleFilters} intervalFilter={'createdAt'}>
        <PageLayout mt={0} mb={6}>
          <DashboardHeader title={t('analytics')} hasFilter mb={3} />
          <Grid container spacing={{ xs: 1, md: 3 }}>
            <Grid item xs={12}>
              <SupplierReportSaleSummary />
            </Grid>
            <Grid item xs={12}>
              <SupplierReportSaleByLocationBarChart />
            </Grid>
            <Grid item xs={12}>
              <SupplierReportSalePercentByLocation />
            </Grid>
            <Grid item xs={12} md={6}>
              <SupplierReportSaleByDayBarChart />
            </Grid>
            <Grid item xs={12} md={6}>
              <SupplierReportSaleByCountryBarChart />
            </Grid>
          </Grid>
        </PageLayout>
      </ReportSaleProvider>
    </ConditionContainer>
  );
};

export default memo(SupplierReportSalePage);
