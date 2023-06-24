import React, { memo, useCallback, useMemo } from 'react';
import { IAdvertisement } from 'modules/rrhh/advertisement/interfaces';
import { Card, CardContent, Typography } from '@mui/material';
import { FlexBox, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { styled } from '@mui/material/styles';
import { AdvertisementColorConstants } from 'modules/rrhh/advertisement/constants/advertisement-color.constants';
import WarningIcon from '@mui/icons-material/Warning';
import { useTranslation } from 'react-i18next';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import { useAdvertisingGotIt } from 'modules/rrhh/advertisement/hooks/useAdvertisingGotIt';
import { ADVERTISEMENTS_TYPES } from 'modules/rrhh/advertisement/constants/advertisement-types.constant';
import { ReactComponent as Flags } from 'assets/images/advertising1.svg';
import { ReactComponent as Alerts } from 'assets/images/advertising2.svg';
import { ReactComponent as Warnings } from 'assets/images/advertising3.svg';

interface IAdvertisingBoxProps {
  item: IAdvertisement;
}

const TitleStyled = styled(FlexBox)(({ bg }: { bg: string }) => ({
  backgroundColor: bg,
  color: '#fff',
  minHeight: '3.5rem',
}));

const AdvertisingBox = ({ item }: IAdvertisingBoxProps) => {
  const { t } = useTranslation('dashboard');

  const { isLoading, error, mutate } = useAdvertisingGotIt();

  const updateGotIt = useCallback(async () => {
    mutate(item?._id as string);
  }, [item?._id]);

  const getImg = useMemo(() => {
    if (item.type === ADVERTISEMENTS_TYPES.INFORMATION) {
      return <Flags style={{ position: 'absolute', fill: 'blue' }} />;
    }
    if (item.type === ADVERTISEMENTS_TYPES.ALERT) {
      return <Alerts style={{ position: 'absolute' }} />;
    }
    if (item.type === ADVERTISEMENTS_TYPES.WARNING) {
      return <Warnings style={{ position: 'absolute' }} />;
    }
    return null;
  }, [item?.type]);

  return (
    <Card>
      <TitleStyled alignItems='center' justifyContent='space-between' bg={AdvertisementColorConstants[item.type]} p={2}>
        <FlexBox alignItems='center' justifyContent='flex-start' gap={1}>
          <WarningIcon />
          <Typography variant='subtitle2'>{item.name}</Typography>
        </FlexBox>

        <FlexBox alignItems='center' justifyContent='flex-end' width='100%' sx={{ position: 'relative' }}>
          {getImg}
        </FlexBox>
      </TitleStyled>
      <CardContent>
        <HandlerError error={error} />
        <Typography>{item.message}</Typography>
        <FlexBox alignItems='center' justifyContent='flex-end' pt={2}>
          <LoadingButton variant='text' endIcon={<DownloadDoneIcon />} loading={isLoading} onClick={updateGotIt}>
            {t('advertising.gotIt')}
          </LoadingButton>
        </FlexBox>
      </CardContent>
    </Card>
  );
};

export default memo(AdvertisingBox);
