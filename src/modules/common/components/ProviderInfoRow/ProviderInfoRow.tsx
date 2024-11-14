import { memo } from 'react';
import { Table, TableCell, TableRow, Typography } from '@mui/material';

type Props = {
  label: string;
  value: any;
};

const ProviderInfoRow = ({ label, value }: Props) => (
  <Table>
    <TableRow sx={{ '.MuiTableCell-root': { borderBottom: 'none', padding: '0px 0px 9px 0px' } }}>
      <TableCell width={'45%'}>
        <Typography>{label}</Typography>
      </TableCell>
      <TableCell align='left'> {value}</TableCell>
    </TableRow>
  </Table>
);

export default memo(ProviderInfoRow);
