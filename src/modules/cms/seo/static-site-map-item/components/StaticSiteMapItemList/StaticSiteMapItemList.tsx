import { memo } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from '@mui/material';
import { MuiTable } from 'components/libs/CustomTable/styled';
import { IStaticSiteMapItem } from '../../interfaces';
import { useTranslation } from 'react-i18next';
import { useTablePagination } from '@dfl/mui-admin-layout';
import { useFindStaticSiteMapItems } from '../../hooks/useFindStaticSiteMapItems';
import { StaticSiteMapItemRowActions } from '../StaticSiteMapItemRowActions';
import { DateValue, IStatus } from '@dfl/mui-react-common';
import { Link } from '@mui/icons-material';
import { DOMAIN } from 'settings/globals';
import { StaticSiteMapItemStatusPicker } from '../StaticSiteMapItemStatusPicker';
import { STATIC_SITE_MAP_ITEM_STATUS_MAP } from '../../constants/static-site-map-item.status';
import StaticSiteMapItemSkeletonList from './StaticSiteMapItemSkeletonList';

type OrderProps = {
  item: IStaticSiteMapItem;
};

const StaticSiteMapItem = ({ item }: OrderProps) => {
  const { t } = useTranslation('common');

  const primarySx: any = {
    primaryTypographyProps: {
      textTransform: 'uppercase',
      fontWeight: 800,
    },
  };

  return (
    <>
      <TableRow
        className='row'
        sx={{
          mt: 1,
          '& .MuiListItemText-root': {
            flexDirection: { xs: 'column', md: 'row' },
            display: 'flex',
            gap: { md: 1 },
            alignItems: { md: 'center' },
          },
        }}
      >
        <TableCell component='th' scope='row'>
          <ListItem>
            <ListItemIcon>
              <Link />
            </ListItemIcon>
            <ListItemText {...primarySx} primary={t('path')} secondary={item?.url} />
          </ListItem>
        </TableCell>
        <TableCell component='th' scope='row'>
          <ListItem>
            <ListItemText {...primarySx} primary={t('domain')} secondary={DOMAIN} />
          </ListItem>
        </TableCell>
        <TableCell component='th' scope='row'>
          <ListItem>
            <ListItemText
              {...primarySx}
              primary={t('status')}
              secondary={
                <StaticSiteMapItemStatusPicker
                  value={STATIC_SITE_MAP_ITEM_STATUS_MAP.get(item?.active ?? false) as IStatus}
                  itemId={item?._id as string}
                />
              }
            />
          </ListItem>
        </TableCell>
        <TableCell component='th' scope='row'>
          <ListItem>
            <ListItemText {...primarySx} primary={t('updatedAt')} secondary={<DateValue value={item?.updatedAt} />} />
          </ListItem>
        </TableCell>
        <TableCell align='center' width={100} sx={{ zIndex: 10 }}>
          <StaticSiteMapItemRowActions rowId={item?._id as string} />
        </TableCell>
      </TableRow>
      <TableRow className='spacing'>
        <TableCell sx={{ height: { xs: 8, md: 12 }, padding: 0 }} component='th' scope='row' colSpan={6}></TableCell>
      </TableRow>
    </>
  );
};

const StaticSiteMapItemList = () => {
  const { data, isLoading, error } = useFindStaticSiteMapItems();
  const { page, rowsPerPage, onPageChange, onRowsPerPageChange } = useTablePagination();
  const { t } = useTranslation('common');

  if (isLoading || error) {
    return <StaticSiteMapItemSkeletonList />;
  }

  const pagination = (
    <TablePagination
      rowsPerPageOptions={[3, 5, 10, 25]}
      labelRowsPerPage={t('pages')}
      component='div'
      count={data?.total || 0}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );

  return (
    <>
      <TableContainer
        sx={{
          width: '100%',
          overflow: {
            lg: 'visible',
          },
          paddingBottom: 4,
        }}
      >
        <MuiTable aria-label='order-table'>
          <TableBody className='body'>
            {data?.data?.map((item: IStaticSiteMapItem) => (
              <StaticSiteMapItem key={item?._id} item={item} />
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {pagination}
    </>
  );
};

export default memo(StaticSiteMapItemList);
