import { NumberValue } from '@dfl/mui-react-common';
import { memo } from 'react';
type Props = {
  value: number;
};

const ReconciliationAdjustmentAmount = ({ value }: Props) => {
  if (value > 0) {
    return (
      <NumberValue
        sx={{
          ':before': {
            content: '"+"',
          },
          color: 'success.main',
        }}
        value={value}
      />
    );
  }

  return (
    <NumberValue
      sx={{
        color: 'error.main',
      }}
      value={value}
    />
  );
};

export default memo(ReconciliationAdjustmentAmount);
