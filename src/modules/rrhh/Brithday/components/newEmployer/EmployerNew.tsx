import { Card, CardContent, List, ListItem, ListItemAvatar, Avatar, Typography, Grid, Box, Chip } from '@mui/material';
import { memo } from 'react';
import EmployerNewSkeleton from './EmployerNewSkeleton';
import { DateValue } from '@dfl/mui-react-common';
import { useFindEmployNew } from '../../hooks/useFindEmployNew';

const EmployerNew = () => {
  const { data, isLoading } = useFindEmployNew();

  if (isLoading || !data) {
    return <EmployerNewSkeleton />;
  }
  if (!data) {
    return (<></>)
  }
  return (
    <Card sx={{ display: data?.length === 0 ? 'none' : 'flex', minWidth: 275, top: 25, position: 'relative', borderRadius: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16, color: 'black', marginBottom: 2 }} color='text.secondary'>
          Nuevos Empleados
        </Typography>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {data?.map((value: any, index: number) => {
            return (
              <ListItem key={index} disablePadding>
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
                        <Avatar alt={value.general.firstName} src={value.general.avatar}/>
                      </ListItemAvatar>
                      <Box>
                        <Typography variant='h3'>
                           {value.general.firstName}
                        </Typography>
                        <Typography variant='caption'>
                         {value.jobInformation.position.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Chip
                      color='primary'
                      size='medium'
                      sx={{
                        height: 'auto',
                        width: 'auto',
                        '& .MuiChip-label': {
                          display: 'block',
                          whiteSpace: 'normal',
                        },
                      }}
                      label={<DateValue value={new Date('2023-02-02')} fromNow />}
                    />
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
export default memo(EmployerNew);
