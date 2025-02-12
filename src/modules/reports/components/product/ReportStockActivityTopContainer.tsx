import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindStockActivity } from 'modules/reports/hooks/product/useFindStockActivity';
import { PagePaperLayout } from 'layouts/index';
import { reportStockActivityColumns } from 'modules/reports/constants/report-stock-activity.columns';
import StockActivityToolbar from './StockActivityToolbar/StockActivityToolbar';

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
  return (
    <PagePaperLayout mt={0} title={'Top Products'} mb={3}>
      <ReportStockActivityTopList />
    </PagePaperLayout>
  );
};

export default memo(ReportStockActivityTopContainer);
