import { memo } from 'react';
import { List, ListItem, ListItemText, Skeleton } from '@mui/material';

const OfferAddressListSkeleton = () => {
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

export default memo(OfferAddressListSkeleton);
