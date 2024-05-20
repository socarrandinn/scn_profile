import { Code } from '@mui/icons-material';
import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Skeleton, Stack } from '@mui/material';
import { memo } from 'react';

const SeoHistorySkeleton = () => {
  return (
    <Stack gap={1} divider={<Divider flexItem />} minHeight={500}>
      {Array(5)
        .fill('')
        .map((sk) => (
          <ListItem key={sk}>
            <ListItemAvatar>
              <Avatar>
                <Code />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<Skeleton variant='text' width={200} />}
              secondary={<Skeleton variant='text' width={120} />}
            />
          </ListItem>
        ))}
    </Stack>
  );
};

export default memo(SeoHistorySkeleton);
