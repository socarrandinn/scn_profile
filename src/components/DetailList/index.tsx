/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/25/23
 */
import React, { memo } from 'react';
import { TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

type Item = {
  label: any;
  value: any;
};
interface DetailListProps {
  data?: [Item];
}

const DetailList = ({ data }: DetailListProps) => {
  return (
    <TableContainer>
      <Table aria-label='simple table'>
        <TableBody>
          {data?.map((row, idx: number) => {
            if (!row.value || row?.value?.props?.data?.length === 0) return null;
            return (
              <TableRow key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row' sx={{ width: 250, color: '#6d6d6d' }}>
                  {row.label}
                </TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(DetailList);
