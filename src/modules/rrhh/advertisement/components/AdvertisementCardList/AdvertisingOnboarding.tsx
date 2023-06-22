import { FlexBox, LoadingButton } from '@dfl/mui-react-common';
import { Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { memo, FC } from 'react';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import { useTranslation } from 'react-i18next';
import { useUser } from '@dfl/react-security';
import { IAdvertisingOnboarding } from '../../interfaces/IAdvertisingOnboarding';

const AdvertisingOnboarding: FC<IAdvertisingOnboarding> = ({ title, bodymenssager }) => {
  const { t } = useTranslation('dashboard');
  const { user } = useUser()
  return (
    <Card sx={{ maxWidth: 345, marginTop: 5 }}>
      <CardMedia
        sx={{ height: 240, display: 'flex', justifyContent: 'center' }}
        image='/images/cardfondo.svg'
        title='mascato'
      >
        <img src='/images/mascotaPulpo.svg' style={{ width: 198 }} />
      </CardMedia>
      <CardContent>
        <Typography
          style={{ fontSize: 'large', color: '#6B4B98', font: 'normal normal 600 18px/20px Poppins' }}
          variant='h1'
          component='div'
        >
          Hola, {user?.fullName}
        </Typography>
        <Typography
          style={{ margin: '9px 0px 7px 0px', fontSize: 'large', color: '#6B4B98', font: 'normal normal normal 14px/20px Poppins' }}
          variant='h1'
          component='div'
        >
          {title}
        </Typography>
        <Stack>
          <Typography variant='body2' color='text.secondary'>
            {bodymenssager}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
      <FlexBox alignItems='center' justifyContent='flex-end' pt={2}>
          <LoadingButton variant='text' endIcon={<DownloadDoneIcon />} >
            {t('advertising.gotIt')}
          </LoadingButton>
        </FlexBox>
      </CardActions>
    </Card>
  );
};

export default memo(AdvertisingOnboarding);
