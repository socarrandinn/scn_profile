import { Avatar, Box, AvatarGroup, Typography } from '@mui/material';
import { memo } from 'react';
import { IPropBrithday } from '../../Interface/INaoBirthday';
import { IEmployee } from 'modules/rrhh/employee/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';

const nowBirthday = ({ items }: IPropBrithday) => {
  if (!items || !items?.length) {
    return (<></>)
  }
  return (
        <Box sx={{ position: 'absolute', top: 25, left: 23 }}>
            <Typography gutterBottom variant='h3' component='div' sx={{ color: 'white' }}>
                ¡ Feliz Cumpleaños !
            </Typography>
            <Typography gutterBottom variant='h5' component='div' sx={{ color: 'white' }}>
                {items[0]?.general?.firstName}
            </Typography>
            <Box sx={{ display: 'inline-flex' }}>
                <Avatar sx={{ marginRight: 3, width: 50, height: 35, borderRadius: 22 }}>🥳</Avatar>
                <AvatarGroup total={items.length} max={3}>
                    {items?.map((result: IEmployee, index: number) => (
                        <AvatarMedia name={result?.general?.firstName} avatar={result?.general?.avatar} key={index}/>
                    ))}
                </AvatarGroup>
            </Box>
        </Box>
  );
};
export default memo(nowBirthday);
