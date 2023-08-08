import { memo } from 'react';
import { Typography } from '@mui/material';

type CommissionCellProps = {
  value: number;
}
const ComissionCell = ({ value }: CommissionCellProps) => {
  return (
    <Typography>{value} %</Typography>
  );
};

export default memo(ComissionCell);
