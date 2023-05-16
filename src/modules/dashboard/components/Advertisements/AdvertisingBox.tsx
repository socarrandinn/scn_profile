import React, { memo, useCallback, useMemo } from 'react';
import { IAdvertisements } from 'modules/dashboard/interfaces';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { FlexBox, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { styled } from '@mui/material/styles';
import { AdvertisementsColorConstants } from 'modules/dashboard/constants/advertisements-color.constants';
import WarningIcon from '@mui/icons-material/Warning';
import { useTranslation } from 'react-i18next';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import { useAdvertisingGotIt } from 'modules/dashboard/hooks/useAdvertisingGotIt';
import { ADVERTISEMENTS_TYPES } from 'modules/dashboard/constants/advertisements-types.constant';
import { ReactComponent as Flags } from 'assets/images/advertising1.svg';
import { ReactComponent as Alerts } from 'assets/images/advertising2.svg';
import { ReactComponent as Warnings } from 'assets/images/advertising3.svg';

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

  const { isLoading, error, mutateAsync } = useAdvertisingGotIt();

  const updateGotIt = useCallback(async () => {
    await mutateAsync(item?._id as string);
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
