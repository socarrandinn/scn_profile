import { memo } from 'react';
import { Stack } from '@mui/material';
import StockWithInvalidQuantityTable from './StockWithInvalidQuantityTable';
import DetailHeaderAction from '../../DetailHeaderAction/DetailHeaderAction';
import { IStockDetailCallback } from 'modules/inventory/product-stock/interfaces/IStockSummary';

export type StockWithInvalidQuantityProps = Pick<IStockDetailCallback, 'stockWithInvalidQuantity'> & {
  onInitialClose: () => void;
};

const StockWithInvalidQuantity = ({ stockWithInvalidQuantity, onInitialClose }: StockWithInvalidQuantityProps) => {
  return (
    <Stack gap={1} minHeight={400} maxHeight={600}>
      <DetailHeaderAction onClose={onInitialClose} title='warehouse.import.summary.error.stockWithInvalidQuantity' />
      <StockWithInvalidQuantityTable data={stockWithInvalidQuantity} />
    </Stack>
  );
};

export default memo(StockWithInvalidQuantity);
