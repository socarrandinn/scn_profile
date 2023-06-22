import { FC, memo } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import { ICardBrithday } from '../../Interface/ICardBrithday';
import NextBirthday from './nextBirthday';
import NowBirthday from './nowBirthday';

const CardBrithday: FC<ICardBrithday> = () => {
  return (
    <Card sx={{ maxWidth: 372, borderRadius: 4, position: 'relative' }}>
      <CardMedia
        sx={{ minHeight: 302, backgroundSize: 'auto', backgroundPosition: 'center' }}
        image='/images/cardCumple.svg'
        title='cumple'
      />
      <NowBirthday />
      <CardContent style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography style={{ fontSize: 'small', marginBottom: 11, position: 'relative' }} variant='h1' component='div'>
          PROXIMOS CUMPLEAÑOS
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
          {[1, 2, 3].map((a: any, index: number) => (
            <Grid item xs={6} key={index}>
              <NextBirthday />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default memo(CardBrithday);
