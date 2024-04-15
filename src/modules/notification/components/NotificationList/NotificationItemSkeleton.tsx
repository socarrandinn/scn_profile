import { Divider, ListItem, ListItemAvatar, ListItemText, Skeleton } from '@mui/material';
import { Fragment } from 'react';

export const NotificationItemSkeleton = () => {
  return (
    <Fragment>
      <ListItem
        secondaryAction={<Skeleton variant='circular' sx={{ width: 18, height: 18 }} />}
        alignItems='flex-start'
        sx={{
          padding: 0,
          margin: '4px 30px 4px 0',
          '.MuiListItemSecondaryAction-root': {
            top: 20,
            right: 0,
          },
        }}
      >
        <ListItemAvatar>
          <Skeleton variant='circular' sx={{ width: 32, height: 32 }} />
        </ListItemAvatar>
        <ListItemText
          primary={<Skeleton variant='text' sx={{ maxWidth: 150, width: '80%' }} />}
          secondary={<Skeleton variant='text' sx={{ maxWidth: 350, width: '100%' }} />}
        />
      </ListItem>
      <Divider flexItem />
    </Fragment>
  );
};

export const NotificationSkeletonList = () => {
  return (
    <>
      {Array(5)
        .fill('')
        .map((sk) => (
          <NotificationItemSkeleton key={sk} />
        ))}
    </>
  );
};
