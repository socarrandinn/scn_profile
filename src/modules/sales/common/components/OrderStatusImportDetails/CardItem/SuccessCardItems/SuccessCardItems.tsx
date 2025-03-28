import { Stack } from '@mui/material';
import { memo } from 'react';
import CardItem from '../CardItem';
import { useTranslation } from 'react-i18next';
import { IStockSuccessData } from 'modules/inventory/product-stock/interfaces/IStockSummary';

type Props = {
  successData: IStockSuccessData;
};

const SuccessCardItems = ({ successData }: Props) => {
  const { t } = useTranslation('stock');
  // const { handleOpen, isOpen, onClose, summaryCase } = useItemAction();
  return (
    <Stack gap={1} mt={2} flexDirection={'row'} flexWrap={'wrap'} flex='1 1 50%'>
      <CardItem
        color='success'
        title={t('warehouse.import.summary.success.auditions')}
        count={successData?.totalAddition || 0}
        variant='outlined'
      />
      <CardItem
        color='success'
        title={t('warehouse.import.summary.success.reductions')}
        count={successData?.totalReduction || 0}
        variant='outlined'
      />
    </Stack>
  );
};

export default memo(SuccessCardItems);
