import { memo } from 'react';
import { useParams } from 'react-router';
import StockVisiblePickerContainer from '../../containers/StockVisiblePickerContainer';
import useWarehouseStockUpdateVisible from '../../hooks/useWarehouseStockUpdateVisible';

type Props = {
  value?: boolean;
  button?: boolean;
  warehouseId?: string;
  rowId: string;
};

const WarehouseStockVisiblePicker = ({ value, rowId, button, warehouseId }: Props) => {
  const { id } = useParams();
  const {
    updateVisible,
    isLoading,
    value: lastValue,
  } = useWarehouseStockUpdateVisible(warehouseId || (id as string), rowId);

  return (
    <StockVisiblePickerContainer
      value={value}
      lastValue={lastValue}
      button={button}
      updateVisible={updateVisible}
      isLoading={isLoading}
    />
  );
};
export default memo(WarehouseStockVisiblePicker);
