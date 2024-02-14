import { ListItem, ListItemIcon, ListItemText, Skeleton, Stack } from '@mui/material';
import { memo } from 'react';
import { PaperContent } from './common';

const StoreSkeleton = () => {
  return (
    <Stack flexDirection={'row'} gap={{ xs: 1, md: 2 }}>
      <PaperContent
        sx={{
          width: { xs: '100%', md: 220 },
          minHeight: { xs: '100%', md: 180 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ListItem sx={{ padding: 0 }}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <Skeleton variant='circular' sx={{ height: 25, width: 25 }} />
          </ListItemIcon>
          <ListItemText primary={<Skeleton variant='text' width={'100%'} height={16} />} />
        </ListItem>
        <Skeleton sx={{ marginY: 'auto' }} variant='text' width={'50%'} height={60} />
        <Skeleton sx={{ marginTop: 'auto' }} variant='rectangular' width={'100%'} height={40} />
      </PaperContent>

      {Array(3)
        .fill('')
        .map((sk) => (
          <PaperContent
            key={sk}
            sx={{
              minHeight: 180,
              minWidth: 420,
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}
          >
            <ListItem sx={{ padding: 0 }}>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <Skeleton variant='circular' sx={{ height: 25, width: 25 }} />
              </ListItemIcon>
              <ListItemText primary={<Skeleton variant='text' width={'60%'} height={15} />} />
            </ListItem>
            <Stack gap={{ xs: 1, md: 2 }} flexDirection={{ xs: 'column', md: 'row' }}>
              <Stack mt={1} flexGrow={1} height={'100%'} justifyContent={'center'}>
                <Skeleton sx={{ marginY: 'auto' }} variant='text' width={'50%'} height={44} />
                <Skeleton sx={{ marginY: 'auto' }} variant='text' width={'50%'} height={14} />

                <Skeleton sx={{ marginY: 'auto' }} variant='text' width={20} height={14} />
              </Stack>
              <Stack flexGrow={1} gap={1}>
                {Array(2)
                  .fill('')
                  .map((sk) => (
                    <Stack key={sk} gap={1}>
                      <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
                        <Skeleton variant='circular' sx={{ height: 8, width: 8 }} />
                        <Skeleton variant='text' width={'80%'} height={14} />
                        <Skeleton variant='text' width={20} height={14} />
                      </Stack>
                      <Skeleton variant='rectangular' width={'100%'} height={30} />
                    </Stack>
                  ))}
              </Stack>
            </Stack>
          </PaperContent>
        ))}
    </Stack>
  );
};

export default memo(StoreSkeleton);
