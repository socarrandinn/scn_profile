import { Skeleton, SxProps, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { memo } from 'react';

export interface DetailListItem {
  key: string;
  label: string;
  value: any;
}

export const filterByLabel = (array: DetailListItem[] | undefined, labels: string[] | undefined): DetailListItem[] => {
  if (!array?.length || !labels?.length) {
    return [];
  }
  return [...array]
    ?.filter((item) => labels?.includes(item.key))
    ?.sort((a, b) => labels?.indexOf(a?.key) - labels?.indexOf(b?.key));
};
interface DetailListProps {
  data?: DetailListItem[];
  isLoading?: boolean;
  labelSx?: SxProps;
  tableRowSx?: SxProps;
  valueSx?: SxProps;
}

const tableCellSx = {
  width: { xs: 170, md: 250 },
  color: 'text.secondary',
};

const DetailList = ({ data, isLoading, labelSx = tableCellSx, valueSx, tableRowSx }: DetailListProps) => {
  return (
    <TableContainer>
      <Table aria-label='simple table'>
        <TableBody>
          {data?.map((row, idx: number) => {
            if (!row.value || row?.value?.props?.data?.length === 0) return null;
            return (
              <TableRow key={idx} sx={{ ...tableRowSx, '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row' sx={labelSx}>
                  {isLoading ? <Skeleton variant='text' /> : row.label}
                </TableCell>
                <TableCell sx={valueSx}>
                  {isLoading ? <Skeleton variant='text' /> : row.value}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(DetailList);
