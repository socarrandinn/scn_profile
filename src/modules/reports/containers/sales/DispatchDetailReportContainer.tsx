import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { Grid } from '@mui/material';
import { DashboardNoPermission } from 'components/DashboardNoPermission';
import { APEX_CHARTS_OPTIONS } from 'components/libs/analytic/constants/bar.chart.constants';
import { PageLayout } from 'layouts/index';
import ReportDispatchSuborderCountBar from 'modules/reports/components/dispatch/ReportDispatchSuborderCountBar';
import { useDispatchDetail } from 'modules/sales/dispatch/contexts/dispatchContext';
import { ISubordersByRegion } from 'modules/sales/dispatch/interfaces';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const DispatchDetailReportContainer = () => {
  const { hasPermission } = useSecurity();
  const { dispatch, isLoading } = useDispatchDetail();
  const { t } = useTranslation('dispatch');

  const orders = useMemo(() => {
    return {
      categories: [t('report.count')],
      data: [dispatch?.metrics?.suborderCount ?? 0],
      title: t('fields.metrics.suborderCount'),
      serieName: t('report.count'),
    };
  }, [dispatch?.metrics?.suborderCount, t]);

  const states = useMemo(() => {
    const categories: string[] = [];
    const data: number[] = [];
    dispatch?.metrics?.subordersByRegion.forEach((item: ISubordersByRegion) => {
      categories.push(item?.state || '');
      data.push(item.totalSuborders);
    });
    return { categories, data, title: t('fields.metrics.subordersByRegion'), serieName: t('report.count') };
  }, [dispatch?.metrics?.subordersByRegion, t]);

  return (
    <PageLayout>
      <ConditionContainer active={hasPermission('REPORT_VIEW')} alternative={<DashboardNoPermission />}>
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12} md={6}>
            <ReportDispatchSuborderCountBar {...orders} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ReportDispatchSuborderCountBar
              {...states}
              isLoading={isLoading}
              colors={[(APEX_CHARTS_OPTIONS.colors as string[])?.[1]]}
            />
          </Grid>
        </Grid>
      </ConditionContainer>
    </PageLayout>
  );
};

export default DispatchDetailReportContainer;
