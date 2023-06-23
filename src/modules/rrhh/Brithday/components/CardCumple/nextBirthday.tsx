import { DateValue } from '@dfl/mui-react-common';
import { Avatar, Box, Chip, Paper, styled, Typography } from '@mui/material';
import { FC, memo } from 'react';
import { INestBrithday } from '../../Interface/INextBrithday';

export const PaperStl = styled(Paper)<{ days: number }>(({ days, theme }) => {
  let color = theme.palette.primary.main
  if (days > 5) {
    color = '#a4328a'
  }
  if (days > 10) {
    color = '#8a88c2'
  }
  if (days > 15) {
    color = '#c793a0'
  }
  return {
    minHeight: 140,
    width: '46%',
    backgroundColor: color,
    padding: 10,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url(/images/fondoCard.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    flexDirection: 'column',
    gap: 2
  }
});

const NextBirthday: FC<INestBrithday> = ({ name, avatar, occupation, brithday }) => {
  const current = new Date()
  const birthday = new Date(brithday);
  birthday.setFullYear(birthday.getMonth() < current.getMonth() ? current.getFullYear() + 1 : current.getFullYear())
  // calculate difference in milliseconds
  const diffInMs = Math.abs(birthday.getTime() - current.getTime());
  // convert milliseconds to days
  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

  return (
        <PaperStl days={diffInDays}>
            <Avatar alt={name} src={avatar}/>
            <Box>
                <Typography style={{ color: 'white' }}>
                    {name}
                </Typography>
                <Typography style={{ fontSize: 'smaller', color: '#ffffff9c' }}>
                    {occupation}
                </Typography>
            </Box>
            <Chip label={<DateValue value={birthday} fromNow/>} color={'opacity'} size={'small'} sx={{ minWidth: 100 }}/>
        </PaperStl>
  );
};

export default memo(NextBirthday);
