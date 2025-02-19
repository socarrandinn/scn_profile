import { memo } from 'react';
import { Table, TableProvider } from '@dfl/mui-admin-layout';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';

import { reportStockActivityColumns } from 'modules/reports/constants/report-stock-activity.columns';
import StockActivityToolbar from './StockActivityToolbar/StockActivityToolbar';
import { reportStockActivityFilters } from 'modules/reports/constants/filters/report-stock-activity.filters';
import { useTranslation } from 'react-i18next';
import { useFindStockActivity } from 'modules/reports/hooks/product/useFindStockActivity';
import { FormPaper } from 'modules/common/components/FormPaper';

const ReportStockActivityTopList = () => {
  const { product } = useProductDetail();
  const { isLoading, error, data } = useFindStockActivity(product?._id as string);
  return (
    <Table
      columns={reportStockActivityColumns}
      data={data?.data}
      total={data?.total}
      isLoading={isLoading}
      error={error}
    />
  );
};

const ReportStockActivityTopContainer = () => {
  const { t } = useTranslation('report');

  return (
    <TableProvider id='product-stock-activity' filters={reportStockActivityFilters}>
      <FormPaper
        sx={{ mb: 3 }}
        variant={{
          title: 'h1',
        }}
        nm
        title={t('report.inventory.activity.list')}
        actions={<StockActivityToolbar />}
      >
        <ReportStockActivityTopList />
      </FormPaper>
    </TableProvider>
  );
};

export default memo(ReportStockActivityTopContainer);
