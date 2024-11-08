import { Stack } from '@mui/material';
import { memo } from 'react';
import CardItem from '../CardItem';
import { useTranslation } from 'react-i18next';

const SuccessCardItems = () => {
  const { t } = useTranslation('stock');
  return (
    <Stack gap={1} mt={2} flexDirection={'row'} flexWrap={'wrap'} flex='1 1 50%'>
      <CardItem color='primary' title={t('warehouse.import.summary.success.item1')} count={266} variant='outlined' />
      <CardItem color='primary' title={t('warehouse.import.summary.success.item2')} count={100} variant='outlined' />
    </Stack>
  );
};

export default memo(SuccessCardItems);
