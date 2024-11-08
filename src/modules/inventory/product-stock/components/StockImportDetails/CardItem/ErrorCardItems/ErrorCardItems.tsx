import { Stack } from '@mui/material';
import { memo } from 'react';
import CardItem from '../CardItem';
import { useTranslation } from 'react-i18next';

const SuccessCardItems = () => {
  const { t } = useTranslation('stock');
  return (
    <Stack gap={1} mt={2} flexDirection={'row'} flexWrap={'wrap'} flex='1 1 50%'>
      <CardItem color='error' title={t('warehouse.import.summary.error.item1')} count={266} variant='outlined' />
      <CardItem color='error' title={t('warehouse.import.summary.error.item2')} count={100} variant='outlined' />
      <CardItem color='error' title={t('warehouse.import.summary.error.item3')} count={50} variant='outlined' />
      <CardItem color='error' title={t('warehouse.import.summary.error.item4')} count={2} variant='outlined' />
    </Stack>
  );
};

export default memo(SuccessCardItems);
