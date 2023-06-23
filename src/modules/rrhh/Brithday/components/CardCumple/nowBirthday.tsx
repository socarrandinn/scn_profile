import { Avatar, Box, AvatarGroup, Typography } from '@mui/material';
import { FC, memo } from 'react';
import { INaoBrithday, IPropBrithday } from '../../Interface/INaoBrithday';

const nowBirthday: FC<IPropBrithday> = ({ items }) => {
  if (items.length === 0) {
    return (<></>)
  }
  return (
    <Box sx={{ position: 'absolute', top: 25, left: 23 }}>
      <Typography gutterBottom variant='h3' component='div' sx={{ color: 'white' }}>
        ¡ Feliz Cumpleaños !
      </Typography>
      <Typography gutterBottom variant='h5' component='div' sx={{ color: 'white' }}>
        {items[0]?.name}
      </Typography>
      <Box sx={{ display: 'inline-flex' }}>
        <Avatar sx={{ marginRight: 3, width: 50, height: 35, borderRadius: 22 }}>🥳</Avatar>
        <AvatarGroup total={items.length} max={3}>
          {items?.map((result: INaoBrithday, index: number) => (
            <Avatar alt={result.name} src={result.avatar} key={index} />
          ))}
        </AvatarGroup>
      </Box>
    </Box>
  );
};
export default memo(nowBirthday);
