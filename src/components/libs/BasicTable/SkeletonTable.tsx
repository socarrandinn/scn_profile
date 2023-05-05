import React, { memo } from 'react';
import { HeadCell } from '@dfl/mui-admin-layout';
import { Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

interface SkeletonTableProps {
  isLoading?: boolean;
  columns: HeadCell[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: '1px solid rgba(224, 224, 224, 1)',
}));

const SkeletonTable = ({ columns }: SkeletonTableProps) => {
  const { t } = useTranslation('common');

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
          {Array.from(Array(5).keys()).map((row: any, idx) => (
            <TableRow key={row.id}>
              {columns?.map((column) => (
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                <TableCell key={`${row?.id || row?._id || idx}-${column.field}`}>
                  <Typography component='div' variant='h3'>
                    <Skeleton />
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(SkeletonTable);
