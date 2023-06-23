import { FC, memo } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { ICardBrithday } from '../../Interface/ICardBrithday';
import NextBirthday from './nextBirthday';
import NowBirthday from './nowBirthday';
import useFindNextBirthdar from '../../hooks/useFindNextBrithday';
import { FlexBox } from '@dfl/mui-react-common';

const CardBrithday: FC<ICardBrithday> = () => {
  const { data, isLoading } = useFindNextBirthdar();
  console.log(data);
  if (isLoading || !data) {
    return (<></>);
  }

  return (
        <Card sx={{ maxWidth: 372, borderRadius: 4, position: 'relative', marginTop: '1rem' }}>
            <CardMedia
                sx={{ minHeight: 302, backgroundSize: 'auto', backgroundPosition: 'center' }}
                image='/images/cardCumple.svg'
                title='cumple'
            />
            <NowBirthday/>
             <CardContent style={{ display: data.length === 0 ? 'none' : 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography style={{ fontSize: 'small', marginBottom: 11, position: 'relative' }} variant='h1'
                            component='div'>
                    PROXIMOS CUMPLEAÑOS
                </Typography>
                <FlexBox flexWrap={'wrap'} justifyContent={'center'} gap={'14px 5%'}>
                    {data?.map((item: any, index: number) => (
                            <NextBirthday name={item.general.firstName} occupation={item.jobInformation.position.name} brithday={item.general.birthday} avatar={item.general.avatar?.url } key={index}/>
                    ))}
                </FlexBox>
             </CardContent>
        </Card>
  );
};

export default memo(CardBrithday);
