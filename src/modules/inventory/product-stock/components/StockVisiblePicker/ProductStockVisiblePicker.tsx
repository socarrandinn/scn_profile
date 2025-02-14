import { memo } from 'react';
import useProductStockUpdateVisible from '../../hooks/useProductStockUpdateVisible';
import { useParams } from 'react-router';
import StockVisiblePickerContainer from '../../containers/StockVisiblePickerContainer';

type Props = {
  value?: boolean;
  button?: boolean;
  rowId: string;
};

const ProductStockVisiblePicker = ({ value, rowId, button }: Props) => {
  const { id } = useParams();
  const { updateVisible, isLoading, value: lastValue } = useProductStockUpdateVisible(id as string, rowId);

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
export default memo(ProductStockVisiblePicker);
