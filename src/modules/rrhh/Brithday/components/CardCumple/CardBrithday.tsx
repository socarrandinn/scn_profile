
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import NextBirthday from './nextBirthday';
import NowBirthday from './nowBirthday';
import useFindNextBirthdar from '../../hooks/useFindNextBrithday';
import { FlexBox } from '@dfl/mui-react-common';
import { INestBrithday } from '../../Interface/INextBrithday';

const CardBrithday = () => {
  const { data, isLoading } = useFindNextBirthdar();
  if (isLoading) {
    return (<></>);
  }
  if (data?.brithdayNow?.length === 0 && data?.nextBrithday?.length === 0) {
    return (<></>)
  }
  return (
    <Card sx={{ maxWidth: 372, borderRadius: 4, position: 'relative', marginTop: '1rem' }}>
      <CardMedia
        sx={{ display: data?.brithdayNow.length === 0 ? 'none' : 'flex', minHeight: 302, backgroundSize: 'auto', backgroundPosition: 'center' }}
        image='/images/cardCumple.svg'
        title='cumple'
      />
      <NowBirthday items={data?.brithdayNow ? data.brithdayNow : []} />
      <CardContent style={{ flexDirection: 'column', flexGrow: 1, }}>
        <Typography style={{ fontSize: 'small', marginBottom: 11, position: 'relative' }} variant='h1' component='div'>
          PROXIMOS CUMPLEAÑOS
        </Typography>
        <FlexBox flexWrap={'wrap'} justifyContent={'center'} gap={'14px 5%'}>
          {data?.nextBrithday?.map((item: INestBrithday, index: number) => (
            <NextBirthday
              name={item.name}
              occupation={item.occupation}
              brithday={item.brithday}
              avatar={item.avatar}
              key={index}
            />
          ))}
        </FlexBox>
      </CardContent>
    </Card>
  );
};

export default CardBrithday;
