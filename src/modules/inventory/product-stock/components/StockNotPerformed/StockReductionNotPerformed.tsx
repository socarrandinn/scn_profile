import { memo, useEffect } from 'react';
import { Stack } from '@mui/material';
import DetailHeaderAction from '../DetailHeaderAction/DetailHeaderAction';
import { useUpdateStockContext } from '../../context/stock-context';
import { IItemUpdateStockError } from '../../interfaces/IStockSummary';
import StockReductionTable from './StockReductionTable';

export type StockReductionNotPerformedProps = {
  items?: IItemUpdateStockError[];
  onInitialClose: () => void;
};

const StockReductionNotPerformed = ({ items, onInitialClose }: StockReductionNotPerformedProps) => {
  const setItems = useUpdateStockContext((state) => state.setItems);
  useEffect(() => {
    if (items) {
      setItems(items);
    }
  }, [items, setItems]);

  return (
    <Stack gap={1} minHeight={400} maxHeight={600}>
      <DetailHeaderAction onClose={onInitialClose} title='warehouse.import.summary.error.item2' />
      <StockReductionTable />
    </Stack>
  );
};

export default memo(StockReductionNotPerformed);
