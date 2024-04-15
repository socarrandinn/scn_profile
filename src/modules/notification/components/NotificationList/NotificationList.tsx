import { useTablePagination } from '@dfl/mui-admin-layout';
import { List as MuiList, Stack, styled, Typography } from '@mui/material';
import { CustomPaginate } from 'components/libs/CoustomPaginate';
import { INotification } from 'modules/notification/interfaces/INotification';
import { memo } from 'react';
import NotificationItem from './NotificationItem';
import { useTranslation } from 'react-i18next';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import { NotificationSkeletonList } from './NotificationItemSkeleton';
import { NotificationEmpty } from '../NotificationEmpty';

type NotificationListProps = {
  total: number;
  isLoading: boolean;
  data: INotification[];
};

export const List = styled(MuiList)(({ theme }) => ({
  '.MuiListItem-root': {},
}));

const NotificationList = ({ data, isLoading, total }: NotificationListProps) => {
  const { t } = useTranslation('notification');
  const { onPageChange, onRowsPerPageChange, page, rowsPerPage } = useTablePagination();

  if (isLoading) return <NotificationSkeletonList />;
  if (data.length === 0) return <NotificationEmpty />;

  return (
    <Stack>
      <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <Typography variant='h1'>{t('list')}</Typography>
        <DraftsOutlinedIcon />
      </Stack>
      <List>
        {data.map((item) => (
          <NotificationItem key={item._id} item={item} />
        ))}
      </List>

      <CustomPaginate
        {...{
          total: total || 0,
          isLoading: isLoading || false,
          rowsPerPage,
          page,
          onPageChange,
          onRowsPerPageChange,
          rowsPerPageOptions: [2, 3, 6],
        }}
      />
    </Stack>
  );
};

export default memo(NotificationList);
