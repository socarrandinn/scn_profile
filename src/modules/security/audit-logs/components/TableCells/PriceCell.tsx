import { CurrencyValue } from '@dfl/mui-react-common';
import { PercentValue } from 'components/libs/PercentValue';
import { memo } from 'react';
type PriceCellProps = {
  value: any;
};

const PriceCell = ({ value }: PriceCellProps) => {
  if (value?.type === 'PERCENT') {
    return <PercentValue value={value?.value} />;
  }
  if (value?.type === 'FIXED') {
    return <CurrencyValue value={value?.value} />;
  }
  return value;
};

export default memo(PriceCell);
