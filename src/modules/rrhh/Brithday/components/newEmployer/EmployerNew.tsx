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
import ListItemText from '@mui/material/ListItemText';
import { memo } from 'react';

const EmployerNew = () => {
  return (
    <Card sx={{ minWidth: 275, top: 25, position: 'relative', borderRadius: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16, color: 'black', marginBottom: 2 }} color='text.secondary'>
          Nuevos Empleados
        </Typography>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {[0, 1, 2].map((value) => {
            return (
              <ListItem key={value} disablePadding>
                <Grid container spacing={1} sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#F1F0F7', borderRadius: 1, marginBottom: 2 }} >
                  <Grid item xs={8}>
                    <Box sx={{ display: 'flex' }}>
                      <ListItemAvatar>
                        <Avatar src='/images/avatarCard.png' />
                      </ListItemAvatar>
                      <Box>
                      <ListItemText primary="Name Employer" />
                      <ListItemText primary="Ingeniero A" />
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
                        2 meses
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
