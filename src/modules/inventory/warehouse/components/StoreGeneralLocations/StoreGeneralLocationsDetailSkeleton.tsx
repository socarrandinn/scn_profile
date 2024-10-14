import { Grid, ListItem, ListItemIcon, ListItemText, Skeleton, Stack } from '@mui/material';
import { memo } from 'react';

const StoreGeneralLocationsDetailSkeleton = () => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }}>
      <Grid item xs={12} md={4}>
        <Stack>
          <ListItem>
            <ListItemIcon
              sx={{
                minWidth: { xs: 24, md: 40 },
                color: 'primary.main',
                marginBottom: 'auto',
                mt: { xs: 0.4, md: 0.3 },
              }}
            >
              <Skeleton variant='circular' sx={{ width: { xs: 20, md: 32 }, height: { xs: 20, md: 32 } }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Stack gap={2}>
                  <Skeleton variant='text' width={'90%'} height={32} />
                  <Stack>
                    <Skeleton variant='text' width={'80%'} height={16} />
                    {Array(5)
                      .fill('')
                      ?.map((l) => (
                        <ListItem key={l} sx={{ padding: 0, marginY: 'auto' }}>
                          <ListItemIcon sx={{ minWidth: 20, color: 'primary.main' }}>
                            <Skeleton
                              variant='circular'
                              sx={{ width: { xs: 12, md: 14 }, height: { xs: 12, md: 14 } }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={<Skeleton variant='text' width={'60%'} sx={{ height: { xs: 12, md: 14 } }} />}
                          />
                        </ListItem>
                      ))}
                  </Stack>
                </Stack>
              }
            />
          </ListItem>
        </Stack>
      </Grid>
      <Grid item xs={12} md={8}>
        <Skeleton variant='rectangular' width={'100%'} height={200} />
      </Grid>
    </Grid>
  );
};

export default memo(StoreGeneralLocationsDetailSkeleton);
