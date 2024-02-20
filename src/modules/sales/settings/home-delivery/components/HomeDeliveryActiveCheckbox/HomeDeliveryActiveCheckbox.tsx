import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const HomeDeliveryActiveCheckbox = () => {
  const { t } = useTranslation('homeDelivery');

  return (
    <Box>
      <FormControlLabel control={<Checkbox />} label={t('fields.active')} />
      <Typography color={'gray'}>{t('activeDescription')}</Typography>
    </Box>
  );
};

export default memo(HomeDeliveryActiveCheckbox);
