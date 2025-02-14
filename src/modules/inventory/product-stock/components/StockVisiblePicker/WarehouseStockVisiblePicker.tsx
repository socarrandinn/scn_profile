import { memo } from 'react';
import { useParams } from 'react-router';
import StockVisiblePickerContainer from '../../containers/StockVisiblePickerContainer';
import useWarehouseStockUpdateVisible from '../../hooks/useWarehouseStockUpdateVisible';

type Props = {
  value?: boolean;
  button?: boolean;
  rowId: string;
};

const WarehouseStockVisiblePicker = ({ value, rowId, button }: Props) => {
  const { id } = useParams();
  const { updateVisible, isLoading, value: lastValue } = useWarehouseStockUpdateVisible(id as string, rowId);

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
