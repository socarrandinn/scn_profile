import { memo } from 'react';
import { List, ListItem, Skeleton, ListItemAvatar, ListItemText } from '@mui/material';

const OfferProductToIncludeListSkeleton = () => {
  return (
    <List sx={{ width: '100%' }}>
      <ListItem
        alignItems='center'
        secondaryAction={
          <Skeleton
            animation='wave'
            variant='circular'
            sx={{
              height: 30,
              width: 30,
            }}
          />
        }
      >
        <ListItemAvatar>
          <Skeleton
            animation='wave'
            variant='rectangular'
            sx={{
              height: 40,
              width: 40,
            }}
          />
        </ListItemAvatar>
        <ListItemText
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}
          primary={<Skeleton animation='wave' variant='text' sx={{ fontSize: '1rem', width: 300 }} />}
          secondary={<Skeleton animation='wave' variant='text' sx={{ fontSize: '1rem', width: 200 }} />}
        />
      </ListItem>
    </List>
  );
};

export default memo(OfferProductToIncludeListSkeleton);
