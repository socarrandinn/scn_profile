import { Box, Stack, TextField, Typography } from '@mui/material';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const HomeDeliveryAdditionalCost = () => {
  const { t } = useTranslation('homeDelivery');

  return (
    <Stack gap={3}>
      <Box>
        <Typography variant='subtitle2'>{t('additionalCost.title')}</Typography>
        <Typography>{t('additionalCost.description')}</Typography>
      </Box>
      <Box>
        <TextField
          label={t('fields.shippingPricePerUnitKG')}
          type='number'
          defaultValue={0}
          inputProps={{ step: 0.01, min: 0 }}
        />
      </Box>

      <Box>
        <TextField
          label={t('fields.shippingPricePerUnitM3')}
          type='number'
          defaultValue={0}
          inputProps={{ step: 0.01, min: 0 }}
        />
      </Box>
    </Stack>
  );
};

export default memo(HomeDeliveryAdditionalCost);
