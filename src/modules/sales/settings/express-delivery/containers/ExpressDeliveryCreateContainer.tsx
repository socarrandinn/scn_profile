import { Stack, Typography } from '@mui/material';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { PermissionCheck } from '@dfl/react-security';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants';
import { AddButton } from '@dfl/mui-admin-layout';
import ExpressDeliveryCreateModal from './ExpressDeliveryCreateModal';

const ExpressDeliveryCreateContainer = () => {
  const { t } = useTranslation('homeDelivery');
  const { isOpen, onClose, onOpen } = useToggle();

  return (
    <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
      <Typography variant='subtitle2'>{t('destinations')}</Typography>

      <PermissionCheck permissions={HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_WRITE}>
        <AddButton action={onOpen}>{t('common:add')}</AddButton>
      </PermissionCheck>
      {/* <ExpressDeliveryCreateModal open={isOpen} onClose={onClose} /> */}
    </Stack>
  );
};

export default memo(ExpressDeliveryCreateContainer);
