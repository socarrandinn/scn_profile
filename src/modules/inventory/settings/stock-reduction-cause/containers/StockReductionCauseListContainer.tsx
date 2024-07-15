import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindStockReductionCauses } from 'modules/inventory/settings/stock-reduction-cause/hooks/useFindStockReductionCauses';
import { stockReductionCauseColumns } from 'modules/inventory/settings/stock-reduction-cause/constants/stock-reduction-cause.columns';
import { StockReductionCauseListToolbar } from 'modules/inventory/settings/stock-reduction-cause/components/StockReductionCauseListToolbar';
import StockReductionCauseEditModal from 'modules/inventory/settings/stock-reduction-cause/containers/StockReductionCauseEditModal';

const StockReductionCauseListContainer = () => {
  const { isLoading, error, data } = useFindStockReductionCauses();
  return (
    <Box>
      <StockReductionCauseListToolbar />
      <Table
        columns={stockReductionCauseColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        // select
      />
      <StockReductionCauseEditModal />
    </Box>
  );
};

export default memo(StockReductionCauseListContainer);
