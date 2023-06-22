import { Avatar, Box, AvatarGroup, Typography } from '@mui/material';
import { memo } from 'react';

const nowBirthday = () => {
  return (
    <Box sx={{ position: 'absolute', top: 25, left: 23 }}>
        <Typography gutterBottom variant='h3' component='div' sx={{ color: 'white' }}>
          ¡ Feliz Cumpleaños !
        </Typography>
        <Typography gutterBottom variant='h5' component='div' sx={{ color: 'white' }}>
          Lorena Perez
        </Typography>
        <Box sx={{ display: 'inline-flex' }}>
          <Avatar sx={{ marginRight: 3, width: 50, height: 35, borderRadius: 22 }}>🥳</Avatar>
          <AvatarGroup total={10} max={4}>
            <Avatar alt='Remy Sharp' src='/images/avatarCard.png' />
            <Avatar alt='Remy Sharp' src='/images/avatarCard.png' />
            <Avatar alt='Remy Sharp' src='/images/avatarCard.png' />
            <Avatar alt='Remy Sharp' src='/images/avatarCard.png' />
          </AvatarGroup>
        </Box>
      </Box>
  );
};
export default memo(nowBirthday);
