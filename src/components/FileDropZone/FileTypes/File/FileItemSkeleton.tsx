import { memo } from 'react';
import { ListItem, ListItemAvatar, ListItemText, Skeleton, Stack } from '@mui/material';

const FileItemSkeleton = () => {
  return (
    <ListItem sx={{ backgroundColor: (theme) => theme.palette.grey[100] }}>
      <ListItemAvatar sx={{ minWidth: 35 }}>
        <Skeleton variant='rounded' sx={{ width: 20, height: 26 }} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Stack flexDirection={'row'} gap={1} justifyContent={'space-between'}>
            <Skeleton variant='text' width={'50%'} />
            <Stack flexDirection={'row'} gap={1}>
              <Skeleton variant='text' width={100} />
              <Skeleton variant='circular' sx={{ width: 20, height: 'auto' }} />
            </Stack>
          </Stack>
        }
      />
    </ListItem>
  );
};

export default memo(FileItemSkeleton);
