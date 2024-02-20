import React, { memo } from 'react';
import useExpressDeliveryCreateForm from 'modules/sales/settings/express-delivery/hooks/useExpressDeliveryCreateForm';
import { Stack } from '@mui/material';
import { LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { ExpressDeliveryStoresForm } from 'modules/sales/settings/express-delivery/components/ExpressDeliveryStoresForm';

const ExpressDeliveryStoresContainer = () => {
  const { t } = useTranslation('common');
  // TODO: Change the hook with the real one
  const { control, error, isLoading, onSubmit } = useExpressDeliveryCreateForm(() => {});

  return (
    <Stack gap={3}>
      <ExpressDeliveryStoresForm control={control} error={error} isLoading={isLoading} onSubmit={onSubmit} />
      <Stack direction={'row'} justifyContent={'end'}>
        <LoadingButton form='express-delivery-stores-form' loading={isLoading} variant='contained' type='submit'>
          {t('save')}
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export default memo(ExpressDeliveryStoresContainer);
