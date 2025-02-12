import { memo } from 'react';
import { Table, TableProvider } from '@dfl/mui-admin-layout';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindStockActivity } from 'modules/reports/hooks/product/useFindStockActivity';
import { PagePaperLayout } from 'layouts/index';
import { reportStockActivityColumns } from 'modules/reports/constants/report-stock-activity.columns';
import StockActivityToolbar from './StockActivityToolbar/StockActivityToolbar';
import { reportStockActivityFilters } from 'modules/reports/constants/filters/report-stock-activity.filters';
import { useTranslation } from 'react-i18next';

const ReportStockActivityTopList = () => {
  const { product } = useProductDetail();
  const { isLoading, error, data } = useFindStockActivity(product?._id);
  return (
    <>
      <StockActivityToolbar />
      <Table
        columns={reportStockActivityColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        hidePagination
      />
    </>
  );
};

const ReportStockActivityTopContainer = () => {
  const { t } = useTranslation('report');
  return (
    <PagePaperLayout mt={0} title={t('report.inventory.activity.list')} mb={3}>
      <TableProvider id='product-stock-activity' filters={reportStockActivityFilters}>
        <ReportStockActivityTopList />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ReportStockActivityTopContainer);
