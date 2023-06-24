import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import NextBirthday from './nextBirthday';
import NowBirthday from './nowBirthday';
import useFindNextBirthday from '../../hooks/useFindNextBrithday';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IEmployee } from 'modules/rrhh/employee/common/interfaces';

const CardBirthday = () => {
  const { data, isLoading } = useFindNextBirthday();
  const { t } = useTranslation('dashboard');
  if (isLoading) {
    return (<></>);
  }
  if (data?.birthdayNow?.length === 0 && data?.nextBirthday?.length === 0) {
    return (<></>)
  }
  return (
        <Card sx={{ position: 'relative' }}>
            <CardMedia
                sx={{
                  display: data?.birthdayNow.length === 0 ? 'none' : 'flex',
                  minHeight: 302,
                  backgroundSize: 'auto',
                  backgroundPosition: 'center'
                }}
                image='/images/cardCumple.svg'
                title='cumple'/>

            <NowBirthday items={data?.birthdayNow}/>
            <CardContent style={{ flexDirection: 'column', flexGrow: 1, }}>
                <Typography variant='h2' gutterBottom>
                    {t('birthday.soon')}
                </Typography>
                <FlexBox flexWrap={'wrap'} justifyContent={'center'} gap={'14px 5%'} mt={1}>
                    {data?.nextBirthday?.map((employee: IEmployee, index: number) => (
                        <NextBirthday employee={employee} key={employee._id}
                        />
                    ))}
                </FlexBox>
            </CardContent>
        </Card>
  );
};

export default CardBirthday;
