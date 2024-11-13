import { Stack } from '@mui/material';
import { memo } from 'react';
import CardItem from '../CardItem';
import { useTranslation } from 'react-i18next';

const SuccessCardItems = () => {
  const { t } = useTranslation('stock');
  // const { handleOpen, isOpen, onClose, summaryCase } = useItemAction();
  return (
    <Stack gap={1} mt={2} flexDirection={'row'} flexWrap={'wrap'} flex='1 1 50%'>
      <CardItem
        color='success'
        title={t('warehouse.import.summary.success.item1')}
        count={266}
        variant='outlined'
        /*        action={
          <ItemAction
            color='primary'
            onOpen={() => {
              handleOpen(STOCK_SUMMARY_CASE.STOCK_ADDICTION_NOT_PERFORMED);
            }}
          />
        } */
      />
      <CardItem color='success' title={t('warehouse.import.summary.success.item2')} count={100} variant='outlined' />
      {/* <ImportStockDetailModal onClose={onClose} open={isOpen} summaryCase={summaryCase} /> */}
    </Stack>
  );
};

export default memo(SuccessCardItems);
