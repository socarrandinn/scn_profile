import { LoadingButton } from '@dfl/mui-react-common';
import { Stack, Typography } from '@mui/material';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import HomeDeliveryCreateModal from './HomeDeliveryCreateModal';
import { useToggle } from '@dfl/hook-utils';
import { PermissionCheck } from '@dfl/react-security';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants';

const HomeDeliveryCreateContainer = () => {
  const { t } = useTranslation('homeDelivery');
  const { isOpen, onClose, onOpen } = useToggle();

  return (
    <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
      <Typography variant='subtitle2'>{t('destinations')}</Typography>

      <PermissionCheck permissions={HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_WRITE}>
        <LoadingButton onClick={onOpen} startIcon={<AddOutlinedIcon />} variant='contained'>
          {t('common:add')}
        </LoadingButton>
      </PermissionCheck>
      <HomeDeliveryCreateModal open={isOpen} onClose={onClose} />
    </Stack>
  );
};

export default memo(HomeDeliveryCreateContainer);
