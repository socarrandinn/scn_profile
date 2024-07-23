import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';
import { Fragment, memo, useCallback, useMemo } from 'react';
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
  const { t } = useTranslation('notification');

  const userRouter = useMemo(() => `/security/users/${item?.data?.owner?._id}/general`, [item]);

  const onDeleteNotification = useCallback(() => {
    mutate();
  }, [mutate]);

  return (
    <Fragment>
      {/* <ReactLink underline='none' to={getNotificationName(item?.data, item?.type)}> */}
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
          <ReactLink underline='none' mr={1} variant='h2' to={userRouter}>
            <Avatar alt={item?._id} src={getFullUrl(item?.data?.owner?.avatar?.thumb)}>
              <ChatOutlined />
            </Avatar>
          </ReactLink>
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{
            fontWeight: 600,
            mr: { xs: 2 },
          }}
          primary={
            <Fragment>
              <ReactLink underline='none' mr={1} variant='h2' to={userRouter}>
                {item?.data?.owner?.firstName}
              </ReactLink>
              <Typography variant='h2' component={'span'}>
                {t(`action.${item?.type}`)}
              </Typography>
            </Fragment>
          }
          secondaryTypographyProps={{
            mr: { xs: 2 },
          }}
          secondary={
            <Stack alignItems={'start'}>
              <ReactLink underline='none' to={getNotificationName(item?.data, item?.type)}>
                {t(`type.${item?.type}`)}
              </ReactLink>
              <Typography variant='caption'>
                <DateValue value={item?.createdAt} format='MMM d, h:mm a' />
              </Typography>
            </Stack>
          }
        />
      </ListItem>
      {/*  </ReactLink> */}
      <Divider flexItem />
    </Fragment>
  );
};

export default memo(NotificationItem);

export const getNotificationName = (data: INotificationData, type: NOTIFICATION_TYPE) => {
  switch (type) {
    case NOTIFICATION_TYPE.NEW_LOGISTIC_PROVIDER:
      return `/inventory/settings/logistics/${data?._id}/general`;
    case NOTIFICATION_TYPE.NEW_PRODUCT_PROVIDER:
      return `/inventory/settings/suppliers/${data?._id}/general`;
    case NOTIFICATION_TYPE.EXPPRESS_DELIVERY_ACTIVE:
      return '/sales/settings/express-deliveries';

    default:
      return '/';
  }
};
