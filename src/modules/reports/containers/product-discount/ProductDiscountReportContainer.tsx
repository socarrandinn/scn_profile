import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { Stack } from '@mui/material';
import { DashboardNoPermission } from 'components/DashboardNoPermission';
import { PageLayout } from 'layouts/index';
import ProductDiscountHistogram from 'modules/reports/components/productDiscount/ProductDiscountHistogram';
import ProductDiscountSummary from 'modules/reports/components/productDiscount/ProductDiscountSummary';
import { reportProductDiscountFilters } from 'modules/reports/constants/filters/report-product-discount-activity.filters';
import { HeaderFilterContext } from 'modules/reports/contexts/HeaderFilterContext';

const ProductDiscountReportContainer = () => {
  const { hasPermission } = useSecurity();
  return (
    <PageLayout>
      <ConditionContainer active={hasPermission('REPORT_VIEW')} alternative={<DashboardNoPermission />}>
        <HeaderFilterContext
          title='report:filters'
          id='product-discount-report'
          filters={reportProductDiscountFilters}
          intervalFilter={'createdAt'}
          showFilters
          // defaultValue='daily'
        >
          <Stack gap={{ xs: 1, md: 2 }} mt={{ xs: 1, md: 2 }}>
            <ProductDiscountSummary />
            <ProductDiscountHistogram />
          </Stack>
        </HeaderFilterContext>
      </ConditionContainer>
    </PageLayout>
  );
};

export default ProductDiscountReportContainer;
