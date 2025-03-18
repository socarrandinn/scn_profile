import { CurrencyValue } from '@dfl/mui-react-common';
import { SxProps } from '@mui/material';
import { PercentValue } from 'components/libs/PercentValue';
import { memo } from 'react';
type PriceCellProps = {
  value: any;
  sx?: SxProps;
};

const PriceCell = ({ value, sx }: PriceCellProps) => {
  if (value?.type === 'PERCENT') {
    return <PercentValue sx={sx} value={value?.value || 0} />;
  }
  if (value?.type === 'FIXED') {
    return <CurrencyValue sx={sx} value={value?.value || 0} />;
  }
  return value || ' - ';
};

export default memo(PriceCell);
