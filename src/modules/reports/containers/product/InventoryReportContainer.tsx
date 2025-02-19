import { memo, useMemo } from 'react';
import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { Grid, Stack } from '@mui/material';
import { DashboardNoPermission } from 'components/DashboardNoPermission';
import { PageLayout } from 'layouts/index';
import ReportProductInventorySummary from 'modules/reports/components/product/ReportProductInventorySummary';
import ReportStockReductionCauses from 'modules/reports/components/product/ReportStockReductionCauses';
import { reportProductInventoryFilters } from 'modules/reports/constants/filters/report-stock-activity.filters';
import { HeaderFilterContext, HeaderFilterListToolbar } from 'modules/reports/contexts/HeaderFilterContext';
import { useInventoryStockReduction, useInventoryStockTopUser } from 'modules/reports/hooks/product/useInventoryStock';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { IStockActivityReduction } from 'modules/reports/interfaces/IReportStockActivity';
import ReportStockActivityTopContainer from 'modules/reports/components/product/ReportStockActivityTopContainer';
import ReportStockActivityHistogram from 'modules/reports/components/product/ReportStockActivityHistogram';
import { useTranslation } from 'react-i18next';

const InventoryReportContainer = () => {
  const { hasPermission } = useSecurity();

  return (
    <PageLayout>
      <ConditionContainer active={hasPermission('REPORT_VIEW_INVENTORY')} alternative={<DashboardNoPermission />}>
        <ReportProductInventorySummary />
        <HeaderFilterContext
          title='report:filters'
          id='product-inventory-report'
          filters={reportProductInventoryFilters}
          intervalFilter={'createdAt'}
          // defaultValue='daily'
        >
          <Stack gap={{ xs: 1, md: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <HeaderFilterListToolbar title='report:filters' />
              </Grid>
              <TopUser />
              <ActivityReduction />
            </Grid>
            <ReportStockActivityHistogram />
            <ReportStockActivityTopContainer />
          </Stack>
        </HeaderFilterContext>
      </ConditionContainer>
    </PageLayout>
  );
};

export default memo(InventoryReportContainer);

const ActivityReduction = () => {
  const { t } = useTranslation('report');
  const { product } = useProductDetail();
  const { data: reduction } = useInventoryStockReduction(product?._id as string);

  const reductionCauseCount = useMemo(() => {
    const categories: string[] = [];
    const data: number[] = [];
    reduction?.reductionCauseCount?.forEach((item: IStockActivityReduction['reductionCauseCount']) => {
      categories.push(item.cause.name);
      data.push(item.count);
    });
    return { categories, data };
  }, [reduction?.reductionCauseCount]);

  const reductionCauseTotal = useMemo(() => {
    const categories: string[] = [];
    const data: number[] = [];
    reduction?.reductionCauseTotal?.forEach((item: IStockActivityReduction['reductionCauseTotal']) => {
      categories.push(item.cause.name);
      data.push(item.total);
    });
    return { categories, data };
  }, [reduction?.reductionCauseTotal]);

  return (
    <>
      <Grid item xs={12} md={6}>
        <ReportStockReductionCauses
          {...reductionCauseCount}
          title='report:report.inventory.charts.stockReductionCausesCount'
          serieName={t('report.inventory.charts.count')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ReportStockReductionCauses
          {...reductionCauseTotal}
          title='report:report.inventory.charts.stockReductionCausesTotal'
          serieName={t('report.inventory.charts.total')}
        />
      </Grid>
    </>
  );
};

const TopUser = () => {
  const { t } = useTranslation('report');
  const { product } = useProductDetail();
  const { data: users } = useInventoryStockTopUser(product?._id as string);

  const topUser = useMemo(() => {
    const categories: string[] = [];
    const data: number[] = [];
    users?.topUser?.forEach((item: any) => {
      categories.push((item?.user?.fullName || '') as string);
      data.push(item.count);
    });
    return { categories, data };
  }, [users]);

  return (
    <Grid item xs={12}>
      <ReportStockReductionCauses
        {...topUser}
        title='report:report.inventory.charts.topUser'
        serieName={t('report.inventory.charts.count')}
      />
    </Grid>
  );
};
