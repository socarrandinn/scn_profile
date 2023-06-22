import { FC, memo } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import { ICardBrithday } from '../../Interface/ICardBrithday';
import NextBirthday from './nextBirthday';
import NowBirthday from './nowBirthday';
import useFindNextBirthdar from '../../hooks/useFindNextBrithday';

const CardBrithday: FC<ICardBrithday> = () => {
  const { data, isLoading } = useFindNextBirthdar();
  console.log(data);
  if (isLoading) {
    return (<></>);
  }

  return (
    <Card sx={{ maxWidth: 372, borderRadius: 4, position: 'relative', marginTop: '1rem' }}>
      <CardMedia
        sx={{ minHeight: 302, backgroundSize: 'auto', backgroundPosition: 'center' }}
        image='/images/cardCumple.svg'
        title='cumple'
      />
      <NowBirthday />
      <CardContent style={{ display: data?.length === 0 || data === undefined ? 'none' : 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography style={{ fontSize: 'small', marginBottom: 11, position: 'relative' }} variant='h1' component='div'>
          PROXIMOS CUMPLEAÑOS
        </Typography>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 1 }}
        >
          {data?.map((item: any, index: number) => (
            <Grid item xs={6} key={index}>
              <NextBirthday item={item} key={index} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default memo(CardBrithday);
