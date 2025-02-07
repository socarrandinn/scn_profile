import { memo } from 'react';
import { Stack } from '@mui/material';
import DetailHeaderAction from '../../DetailHeaderAction/DetailHeaderAction';
import { IStockDetailCallback } from '../../../interfaces/IStockSummary';
import StockReductionTable from './StockReductionTable';

export type StockReductionNotPerformedProps = Pick<IStockDetailCallback, 'stockReductionWithInvalidCause'> & {
  onInitialClose: () => void;
};

const StockReductionNotPerformed = ({
  stockReductionWithInvalidCause,
  onInitialClose,
}: StockReductionNotPerformedProps) => {
  return (
    <Stack gap={1} minHeight={400} maxHeight={600}>
      <DetailHeaderAction
        onClose={onInitialClose}
        title='warehouse.import.summary.error.stockReductionWithInvalidCause'
      />
      <StockReductionTable data={stockReductionWithInvalidCause} />
    </Stack>
  );
};

export default memo(StockReductionNotPerformed);
