import { memo } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { MuiTable } from 'components/libs/CustomTable/styled';

const StaticSiteMapItemSkeleton = () => {
  return (
    <>
      <TableRow className='row' sx={{ mt: 1 }}>
        <TableCell component='th' scope='row'>
          <Skeleton variant='text' width={'100%'} />
        </TableCell>
        <TableCell component='th' scope='row'>
          <Skeleton variant='text' width={'100%'} />
        </TableCell>
        <TableCell component='th' scope='row'>
          <Skeleton variant='text' width={'100%'} />
        </TableCell>
        <TableCell component='th' scope='row'>
          <Skeleton variant='text' width={'100%'} />
        </TableCell>
        <TableCell align='center' width={100} sx={{ zIndex: 10 }}>
          <Skeleton variant='text' width={'100%'} />
        </TableCell>
      </TableRow>
      <TableRow className='spacing'>
        <TableCell sx={{ height: { xs: 8, md: 12 }, padding: 0 }} component='th' scope='row' colSpan={6}></TableCell>
      </TableRow>
    </>
  );
};

const StaticSiteMapItemSkeletonList = () => {
  return (
    <MuiTable aria-label='order-table'>
      <TableBody className='body'>
        {Array(5)
          .fill('')
          .map((sk) => (
            <StaticSiteMapItemSkeleton key={sk} />
          ))}
      </TableBody>
    </MuiTable>
  );
};

export default memo(StaticSiteMapItemSkeletonList);
