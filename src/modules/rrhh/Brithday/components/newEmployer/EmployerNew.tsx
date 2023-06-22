import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import { memo } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import EmployerNewSkeleton from './EmployerNewSkeleton';
import { DateValue } from '@dfl/mui-react-common';

const EmployerNew = () => {
  // TODO When the microservice is deployed, uncomment the line and delete the other useQuery.
  // const { data, isLoading } = useFindEmployNew();

  const { data, isLoading } = useQuery({
    queryKey: ['FindNewEmploy'],
    queryFn: () => axios.get('http://localhost:8080/ms-rrhh/api/employees/new/employ').then((res) => res.data),
  })

  if (isLoading) {
    return (<EmployerNewSkeleton/>)
  }

  if (data.count === 0) {
    return (<></>)
  }

  return (
    <Card sx={{ minWidth: 275, top: 25, position: 'relative', borderRadius: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16, color: 'black', marginBottom: 2 }} color='text.secondary'>
          Nuevos Empleados
        </Typography>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {data.data.map((value: any, index: number) => {
            return (
              <ListItem key={index} disablePadding>
                <Grid container spacing={1} sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#F1F0F7', borderRadius: 1, marginBottom: 2 }} >
                  <Grid item xs={8}>
                    <Box sx={{ display: 'flex' }}>
                      <ListItemAvatar>
                        <Avatar src='/images/avatarCard.png' />
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
                  <Grid item xs={2}>
                    <Box
                      sx={{
                        width: 60,
                        height: 25,
                        backgroundColor: '#553089',
                        borderRadius: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Typography sx={{ fontSize: 12, color: 'white' }} color='text.secondary'>
                      <DateValue value={new Date(value.hiring.date)} fromNow/>
                      </Typography>
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
export default memo(EmployerNew);
