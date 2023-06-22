import { memo } from 'react';
import { Card, CardContent, List, ListItem, ListItemAvatar, Grid, Box, Skeleton } from '@mui/material';

const EmployerNewSkeleton = () => {
  return (
    <Card sx={{ minWidth: 275, top: 25, position: 'relative', borderRadius: 2 }}>
      <CardContent>
        <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {[0, 1, 2].map((value) => {
            return (
              <ListItem key={value} disablePadding>
                <Grid
                  container
                  spacing={1}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#F1F0F7',
                    borderRadius: 1,
                    marginBottom: 2,
                  }}
                >
                  <Grid item xs={8}>
                    <Box sx={{ display: 'flex' }}>
                      <ListItemAvatar>
                        <Skeleton variant='circular' width={40} height={40} />
                      </ListItemAvatar>
                      <Box>
                        <Skeleton variant='rectangular' width={120} height={35} />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box>
                      <Skeleton variant='rounded' width={65} height={25} />
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};
export default memo(EmployerNewSkeleton);
