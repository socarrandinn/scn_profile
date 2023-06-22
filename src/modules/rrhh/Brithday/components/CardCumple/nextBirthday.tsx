import { Avatar, Box, Paper, Typography } from '@mui/material';
import { memo } from 'react';

const NextBirthday = () => {
  return (
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
          backgroundImage: 'url(/images/fondoCard.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <Avatar src='/images/avatarCard.png' sx={{ backgroundSize: 'auto', backgroundPosition: 'center', top: 7 }} />
        <Box>
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
        </Box>
        <Box
          sx={{
            width: '90%',
            height: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#B7B6DA'),
            bottom: 5,
            borderRadius: 2,
          }}
        >
          <Typography variant='h1' sx={{ fontSize: 12, color: 'white' }} component='div'>
            Mañana
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default memo(NextBirthday);
