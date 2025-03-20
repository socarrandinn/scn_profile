import { memo } from 'react';
import { Typography } from '@mui/material';

type CommissionCellProps = {
  value: number;
};
const CommissionCell = ({ value }: CommissionCellProps) => {
  return <Typography>{value} %</Typography>;
};

export default memo(CommissionCell);
