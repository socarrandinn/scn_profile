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
      {summary?.details?.productNoExist && (
        <CardItem
          color='error'
          title={t('warehouse.import.summary.error.productNoExist')}
          count={summary?.details?.productNoExist?.length || 0}
          variant='outlined'
          action={
            <ItemAction
              disabled={(summary?.details?.productNoExist?.length ?? 0) === 0}
              color='error'
              onOpen={() => {
                handleOpen(STOCK_SUMMARY_CASE.productNoExist);
              }}
            />
          }
        />
      )}

      {summary?.details?.stockWithInvalidQuantity && (
        <CardItem
          color='error'
          title={t('warehouse.import.summary.error.stockWithInvalidQuantity')}
          count={summary?.details?.stockWithInvalidQuantity?.length || 0}
          variant='outlined'
          action={
            <ItemAction
              disabled={(summary?.details?.stockWithInvalidQuantity?.length ?? 0) === 0}
              color='error'
              onOpen={() => {
                handleOpen(STOCK_SUMMARY_CASE.stockWithInvalidQuantity);
              }}
            />
          }
        />
      )}

      <CardItem
        color='error'
        title={t('warehouse.import.summary.error.invalidArea')}
        count={summary?.details?.invalidArea?.length || 0}
        variant='outlined'
        action={
          <ItemAction
            disabled={(summary?.details?.invalidArea?.length ?? 0) === 0}
            color='error'
            onOpen={() => {
              handleOpen(STOCK_SUMMARY_CASE.invalidArea);
            }}
          />
        }
      />
      <CardItem
        color='error'
        title={t('warehouse.import.summary.error.stockReductionWithInvalidCause')}
        count={summary?.details?.stockReductionWithInvalidCause?.length || 0}
        variant='outlined'
        action={
          <ItemAction
            disabled={(summary?.details?.stockReductionWithInvalidCause?.length ?? 0) === 0}
            color='error'
            onOpen={() => {
              handleOpen(STOCK_SUMMARY_CASE.stockReductionWithInvalidCause);
            }}
          />
        }
      />
      <CardItem
        color='error'
        title={t('warehouse.import.summary.error.warehouseSupplierNoExist')}
        count={summary?.details?.warehouseSupplierNoExist?.length || 0}
        variant='outlined'
        action={
          <ItemAction
            disabled={(summary?.details?.warehouseSupplierNoExist?.length ?? 0) === 0}
            color='error'
            onOpen={() => {
              handleOpen(STOCK_SUMMARY_CASE.warehouseSupplierNoExist);
            }}
          />
        }
      />

      <ImportStockDetailModal onClose={onClose} open={isOpen} summaryCase={summaryCase} details={summary?.details} />
    </Stack>
  );
};

export default memo(SuccessCardItems);
