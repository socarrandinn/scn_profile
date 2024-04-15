import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';
import { Fragment, memo, useCallback } from 'react';
import { Close, ChatOutlined } from '@mui/icons-material';
import { INotification, INotificationData, NOTIFICATION_TYPE } from 'modules/notification/interfaces/INotification';
import { DateValue } from '@dfl/mui-react-common';
import { getFullUrl } from 'utils/index';
import { useTranslation } from 'react-i18next';
import { ReactLink } from '@dfl/react-security';
import { useDeleteNotification } from 'modules/notification/hooks/useDeleteNotification';
import LoadingIconButton from 'components/LoadingIconButton/LoadingIconButton';

type NotificationItemProps = {
  item: INotification;
};
const NotificationItem = ({ item }: NotificationItemProps) => {
  const { mutate, isLoading } = useDeleteNotification(item?._id);

  const onDeleteNotification = useCallback(() => {
    mutate();
  }, [mutate, item?._id]);

  return (
    <Fragment>
      <ListItem
        secondaryAction={
          <LoadingIconButton loading={isLoading} size='small' onClick={onDeleteNotification}>
            <Close fontSize='inherit' />
          </LoadingIconButton>
        }
        alignItems='flex-start'
        sx={{
          padding: 0,
          margin: '4px 0',
          '.MuiListItemSecondaryAction-root': {
            top: 20,
            right: 0,
          },
        }}
      >
        <ListItemAvatar>
          <Avatar alt={item?._id} src={getFullUrl(item?.data?.owner?.avatar?.thumb)}>
            <ChatOutlined />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{
            fontWeight: 600,
            mr: { xs: 2 },
          }}
          primary={item?.title}
          secondaryTypographyProps={{
            mr: { xs: 2 },
          }}
          secondary={
            <Stack alignItems={'start'}>
              <NotificationNameCell data={item?.data} type={item?.type} />
              <Typography variant='caption'>
                <DateValue value={item?.createdAt} format='MMMM d, h:mm a' />
              </Typography>
            </Stack>
          }
        />
      </ListItem>
      <Divider flexItem />
    </Fragment>
  );
};

export default memo(NotificationItem);

type NotificationNameCellProps = {
  data: INotificationData;
  type: NOTIFICATION_TYPE;
};

export const NotificationNameCell = ({ data, type }: NotificationNameCellProps) => {
  const { t } = useTranslation('notification');
  switch (type) {
    case NOTIFICATION_TYPE.NEW_LOGISTIC_PROVIDER:
      return (
        <ReactLink variant='caption' to={`/inventory/settings/logistics/${data?._id}/general`}>
          {data?.name}
        </ReactLink>
      );
    case NOTIFICATION_TYPE.NEW_PRODUCT_PROVIDER:
      return (
        <ReactLink variant='caption' to={`/inventory/settings/suppliers/${data?._id}/general`}>
          {data?.name}
        </ReactLink>
      );

    default:
      return <Typography variant='caption'>{t(`type.${type}`)}</Typography>;
  }
};
