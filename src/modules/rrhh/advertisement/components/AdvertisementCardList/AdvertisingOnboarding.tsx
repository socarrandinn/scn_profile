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
        <Card>
            <CardMedia
                sx={{ height: 240, display: 'flex', justifyContent: 'center' }}
                image='/images/cardfondo.svg'
                title='mascato'
            >
                <img src='/images/mascotaPulpo.svg' style={{ width: 198 }}/>
            </CardMedia>
            <CardContent sx={{ py: 0 }}>
                <Typography variant={'h2'} gutterBottom color={'primary'}>
                    Hola, {user?.fullName}
                </Typography>
                <Typography variant={'caption'}>
                    {title}
                </Typography>

                <Typography mt={2}>
                    {bodymenssager}
                </Typography>

            </CardContent>
            <CardActions>
                <LoadingButton variant='text' endIcon={<DownloadDoneIcon/>}>
                    {t('advertising.gotIt')}
                </LoadingButton>
            </CardActions>
        </Card>
  );
};

export default memo(AdvertisingOnboarding);
