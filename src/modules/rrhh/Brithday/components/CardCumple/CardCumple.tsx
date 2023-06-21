import { FC, memo } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Grid, Paper, Avatar, AvatarGroup } from '@mui/material';
import { ICardBrithday } from '../../Interface/ICardBrithday';

const CardBrithday: FC<ICardBrithday> = ({ name }) => {
  return (
    <Card sx={{ maxWidth: 372, height: 720, borderRadius: 4, position: 'relative' }}>
      <CardMedia
        sx={{
          height: '46%',
          width: '100%',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
        image='/images/cardCumple.svg'
      />
      <Box sx={{ position: 'absolute', top: 25, left: 23 }}>
        <Typography gutterBottom variant='h3' component='div' sx={{ color: 'white' }}>
          ¡ Feliz Cumpleaños !
        </Typography>
        <Typography gutterBottom variant='h5' component='div' sx={{ color: 'white' }}>
          {name}
        </Typography>
        <AvatarGroup total={10} max={4}>
          <Avatar alt='Remy Sharp' src='/images/avatarCard.png' />
          <Avatar alt='Remy Sharp' src='/images/avatarCard.png' />
          <Avatar alt='Remy Sharp' src='/images/avatarCard.png' />
          <Avatar alt='Remy Sharp' src='/images/avatarCard.png' />
        </AvatarGroup>
      </Box>
      <CardContent style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography style={{ fontSize: 'revert', bottom: 4 }} variant='h1' component='div'>
          PROXIMOS CUMPLEAÑOS
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
          {[1, 2, 3, 5].map((a: any, index: number) => (
            <Grid item xs={6} key={index}>
              <Paper
                sx={{
                  height: 140,
                  width: 130,
                  backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#553089'),
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    width: '95%',
                    height: '100%',
                    flexWrap: 'wrap',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Avatar
                    src='/images/avatarCard.png'
                    sx={{ backgroundSize: 'auto', backgroundPosition: 'center', top: 7 }}
                  />
                  <div>
                    <Typography
                      style={{ fontSize: 'revert', top: 5, position: 'relative', color: 'white' }}
                      variant='h1'
                      component='div'
                    >
                      Name Proximo
                    </Typography>
                    <Typography style={{ fontSize: 'smaller', color: '#AC9EC8' }} variant='h1' component='div'>
                      Ingeniero A
                    </Typography>
                  </div>
                  <Box
                    sx={{
                      width: '90%',
                      height: 30,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#B7B6DA'),
                      bottom: 5,
                      borderRadius: 2
                    }}
                  >
                    <Typography variant='h1' sx={{ fontSize: 12, color: 'white' }} component='div' >
                      Mañana
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default memo(CardBrithday);
