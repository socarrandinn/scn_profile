import { memo } from 'react';
import Barcode from 'react-barcode';
type BarCodeViewProps = {
  code: string;
};

const BarCodeView = ({ code }: BarCodeViewProps) => {
  return <Barcode value={code} height={24} displayValue={true} margin={0} marginBottom={1} fontSize={12} />;
};

export default memo(BarCodeView);
