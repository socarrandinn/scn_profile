import { memo, useCallback } from 'react';
import { IItemUpdateStockError } from '../../interfaces/IStockSummary';
import { TextField } from '@mui/material';
import { useUpdateStockContext } from '../../context/stock-context';
type UpdateStockCellProps = {
  value: number;
  record: IItemUpdateStockError;
};

const UpdateStockCell = ({ record, value }: UpdateStockCellProps) => {
  const setQuantity = useUpdateStockContext((state) => state.setQuantity);
  const handleChange = useCallback(
    (event: any) => {
      setQuantity(event.target.value, record?.item?._id);
    },
    [record?.item?._id, setQuantity],
  );

  return (
    <TextField
      defaultValue={value}
      onChange={handleChange}
      type='number'
      size='small'
      inputProps={{
        inputMode: 'numeric',
        pattern: '[0-9]*',
        min: 0,
      }}
    />
  );
};

export default memo(UpdateStockCell);
