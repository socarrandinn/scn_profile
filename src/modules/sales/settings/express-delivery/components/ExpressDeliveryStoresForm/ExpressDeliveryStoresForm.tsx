import { Form, HandlerError } from '@dfl/mui-react-common';
import { Box, Stack, Typography } from '@mui/material';
import { SelectStore } from 'modules/inventory/provider/supplier/components/SelectStore';
import React, { FormEventHandler, memo } from 'react';
import { useTranslation } from 'react-i18next';

type ExpressDeliveryStoresFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ExpressDeliveryStoresForm = ({ error, control, isLoading, onSubmit }: ExpressDeliveryStoresFormProps) => {
  const { t } = useTranslation('expressDelivery');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} id={'express-delivery-stores-form'}>
        <Stack gap={3}>
          <Box>
            <Typography variant='subtitle2'>{t('expressDeliveryStores.title')}</Typography>
            <Typography>{t('expressDeliveryStores.description')}</Typography>
          </Box>

          <SelectStore name='stores' placeholder={t('fields.selectStores')} multiple />
        </Stack>
      </Form>
    </div>
  );
};

export default memo(ExpressDeliveryStoresForm);
