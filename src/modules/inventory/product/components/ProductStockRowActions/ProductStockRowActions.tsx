import { memo, useCallback } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';
import InventoryIcon from '@mui/icons-material/Inventory';
import { PRODUCT_STOCK_OPERATIONS } from '../../constants/stock-operations.constants';
import ProductStockCreateModal from '../../containers/ProductStockCreateModal';

type ProductStockRowProps = {
  record: any;
  warehouse: any;
  isDirectory?: boolean;
};

const ProductStockRowActions = ({ record, warehouse, isDirectory }: ProductStockRowProps) => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onOpen } = useToggle();

  const handleUpdateStock = useCallback(() => {
    onOpen();
  }, [onOpen]);

  const warehouseId = warehouse;
  return (
    <>
      <ProductStockCreateModal
        title={t('updateStockTitle', { name: record?.name })}
        open={isOpen}
        onClose={onClose}
        initValue={{
          productId: record?._id,
          warehouse: warehouseId,
          operation: PRODUCT_STOCK_OPERATIONS.ADDED,
          quantity: 0,
          cause: undefined,
        }}
        productId={record?._id as string}
        warehouseId={warehouseId}
        isDirectory={isDirectory}
      />
      <Stack direction='row' spacing={1}>
        <Button startIcon={<InventoryIcon />} variant={'outlined'} onClick={handleUpdateStock}>
          <Typography display={{ xs: 'none', md: 'block' }}>{t('updateStock')}</Typography>
        </Button>
      </Stack>
    </>
  );
};

export default memo(ProductStockRowActions);
