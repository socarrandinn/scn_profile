import React, { memo } from 'react';
import { IAdvertisements } from 'modules/dashboard/interfaces';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { styled } from '@mui/material/styles';
import { AdvertisementsColorConstants } from 'modules/dashboard/constants/advertisements-color.constants';
import WarningIcon from '@mui/icons-material/Warning';
import { useTranslation } from 'react-i18next';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

interface IAdvertisingBoxProps {
  item: IAdvertisements;
}

const TitleStyled = styled(FlexBox)(({ bg }: { bg: string }) => ({
  backgroundColor: bg,
  color: '#fff',
  minHeight: '3.5rem',
}));

const AdvertisingBox = ({ item }: IAdvertisingBoxProps) => {
  const { t } = useTranslation('dashboard');
  return (
    <Card sx={{ marginBottom: '1rem' }}>
      <TitleStyled
        alignItems='center'
        justifyContent='space-between'
        bg={AdvertisementsColorConstants[item.type]}
        p={2}
      >
        <FlexBox alignItems='center' justifyContent='flex-start' gap={1}>
          <WarningIcon />
          <Typography variant='subtitle2'>{item.name}</Typography>
        </FlexBox>
      </TitleStyled>
      <CardContent>
        <Typography>{item.message}</Typography>
        <FlexBox alignItems='center' justifyContent='flex-end' pt={2}>
          <Button variant='text' endIcon={<DownloadDoneIcon />}>
            {t('advertising.gotIt')}
          </Button>
        </FlexBox>
      </CardContent>
    </Card>
  );
};

export default memo(AdvertisingBox);
