import { HeadCell, Table } from '@dfl/mui-admin-layout';
import { memo } from 'react';
import { stockReductionColumns } from '../../constants/stock-items.columns';
import { useUpdateStockContext } from '../../context/stock-context';
import { Box } from '@mui/material';

const StockReductionTable = ({ columns = stockReductionColumns }: { columns?: Array<HeadCell<any>> }) => {
  const items = useUpdateStockContext((state) => state.items);
  return (
    <Box
      sx={{
        '& .MuiTable-root': {
          minWidth: 300,
        },
      }}
    >
      <Table data={items} total={items.length} hidePagination columns={columns} />
    </Box>
  );
};

export default memo(StockReductionTable);
