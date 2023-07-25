import { memo } from 'react';
import { Typography } from '@mui/material';

type CommissionCelll = {
  value: number;
}
const commissionCelll = ({ value }: CommissionCelll) => {
  return (
    <Typography>{value} %</Typography>
  );
};

export default memo(commissionCelll);
