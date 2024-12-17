import { memo } from 'react';
import { ReactBarcode, Renderer } from 'react-jsbarcode';
type BarCodeViewProps = {
  code: string;
};

const BarCodeView = ({ code }: BarCodeViewProps) => {
  if (code) {
    return (
      <ReactBarcode
        value={code}
        options={{ format: 'code128', fontSize: 12, height: 40, textAlign: 'right', marginLeft: -2 }}
        renderer={Renderer.SVG}
      />
    );
  }
  return <>{code}</>;
  // return <Barcode value={code} height={24} displayValue={true} margin={0} marginBottom={1} fontSize={12} />;
};

export default memo(BarCodeView);
