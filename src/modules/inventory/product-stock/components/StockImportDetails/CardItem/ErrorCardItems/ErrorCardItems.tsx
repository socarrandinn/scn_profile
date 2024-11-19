import { Stack } from '@mui/material';
import { memo } from 'react';
import CardItem from '../CardItem';
import { useTranslation } from 'react-i18next';
import ImportStockDetailModal from 'modules/inventory/product-stock/containers/ImportStockDetailModal';
import { IStockSummary, STOCK_SUMMARY_CASE } from 'modules/inventory/product-stock/interfaces/IStockSummary';
import { ItemAction } from '../ItemAction';
import { useItemAction } from '../../../../hooks/useItemAction';

const SuccessCardItems = ({ summary }: { summary: IStockSummary | undefined }) => {
  const { t } = useTranslation('stock');
  const { handleOpen, isOpen, onClose, summaryCase } = useItemAction();

  return (
    <Stack gap={1} mt={2} flexDirection={'row'} flexWrap={'wrap'} flex='1 1 50%'>
      <CardItem
        color='error'
        title={t('warehouse.import.summary.error.item1')}
        count={summary?.details?.productNoExist?.length || 0}
        variant='outlined'
      />
      <CardItem
        color='error'
        title={t('warehouse.import.summary.error.item2')}
        count={summary?.details?.productWithInvalidReductionCause?.length || 0}
        variant='outlined'
        action={
          <ItemAction
            color='error'
            onOpen={() => {
              handleOpen(STOCK_SUMMARY_CASE.STOCK_REDUCTION_NOT_PERFORMED);
            }}
          />
        }
      />
      <CardItem
        color='error'
        title={t('warehouse.import.summary.error.item3')}
        count={50}
        variant='outlined'
        action={
          <ItemAction
            color='error'
            onOpen={() => {
              handleOpen(STOCK_SUMMARY_CASE.STOCK_ADDICTION_NOT_PERFORMED);
            }}
          />
        }
      />
      <CardItem
        color='error'
        title={t('warehouse.import.summary.error.item4')}
        count={2}
        variant='outlined'
        action={
          <ItemAction
            color='error'
            onOpen={() => {
              handleOpen(STOCK_SUMMARY_CASE.SUPPLIER_NO_RELATION);
            }}
          />
        }
      />

      <ImportStockDetailModal onClose={onClose} open={isOpen} summaryCase={summaryCase} />
    </Stack>
  );
};

export default memo(SuccessCardItems);
