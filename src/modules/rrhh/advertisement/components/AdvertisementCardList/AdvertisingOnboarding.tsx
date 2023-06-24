import { FlexBox, LoadingButton } from '@dfl/mui-react-common';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { memo, useCallback } from 'react';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import { useTranslation } from 'react-i18next';
import { useUser } from '@dfl/react-security';
import { useAdvertisingGotIt } from 'modules/rrhh/advertisement/hooks/useAdvertisingGotIt';
import { IAdvertisingBoxProps } from 'modules/rrhh/advertisement/components/AdvertisementCardList/AdvertisingBox';

const AdvertisingOnboarding = ({ item }: IAdvertisingBoxProps) => {
  const { t } = useTranslation('dashboard');
  const { user } = useUser();
  const { isLoading, error, mutate } = useAdvertisingGotIt();

  const updateGotIt = useCallback(async () => {
    mutate(item?._id as string);
  }, [item?._id]);

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
                    {item.name}
                </Typography>

                <Typography mt={2}>
                    {item.message}
                </Typography>

            </CardContent>
            <CardActions>
                <FlexBox alignItems='center' justifyContent='flex-end' width={'100%'} pr={1}>
                    <LoadingButton variant='text' endIcon={<DownloadDoneIcon/>} loading={isLoading}
                                   onClick={updateGotIt}>
                        {t('advertising.gotIt')}
                    </LoadingButton>
                </FlexBox>
            </CardActions>
        </Card>
  );
};

export default memo(AdvertisingOnboarding);
