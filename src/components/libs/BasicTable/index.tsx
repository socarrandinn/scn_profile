import React, { memo } from 'react';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { HeadCell } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';
import SkeletonTable from './SkeletonTable';

interface BasicTableProps {
  columns: HeadCell[];
  data: any[];
  isLoading?: boolean;
  error?: any;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: '1px solid rgba(224, 224, 224, 1)',
}));

const BasicTable = ({ columns, data, isLoading, error }: BasicTableProps) => {
  const { t } = useTranslation('common');

  if (isLoading) {
    return <SkeletonTable isLoading={isLoading} columns={columns} />;
  }

  if (error) {
    return <div>Error: {t(error?.message)}</div>;
  }

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {columns?.map((column) => (
              <StyledTableCell key={column.field}>{t(column.headerName)}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row: any, idx) => (
            <TableRow key={row.id}>
              {columns?.map((column) => (
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                <TableCell key={`${row?.id || row?._id || idx}-${column.field}`}>
                  {column.renderCell ? column.renderCell(row[column.field], row) : row[column.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default memo(BasicTable);
