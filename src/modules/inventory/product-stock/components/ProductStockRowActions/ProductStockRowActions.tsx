import { memo, useCallback } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductStockCreateModal from '../../containers/ProductStockCreateModal';
import { STOCK_OPERATIONS } from '../../constants/stock-operations.constants';
import { TransTypography } from 'components/TransTypography';
import { IWarehouseStockItem } from '../../interfaces/IStockResponse';

type ProductStockRowProps = {
  record: IWarehouseStockItem;
  warehouse: string;
  isDirectory?: boolean;
};

const ProductStockRowActions = ({ record, warehouse: warehouseId, isDirectory }: ProductStockRowProps) => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onOpen } = useToggle();

  const handleUpdateStock = useCallback(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <ProductStockCreateModal
        title={<TransTypography message={'product:stock.updateStockTitle'} values={{ name: record?.name }} />}
        open={isOpen}
        onClose={onClose}
        initValue={{
          item: record?._id as any, // productId
          warehouse: warehouseId,
          warehouseArea: record?.warehouseArea?.areaId,
          operation: STOCK_OPERATIONS.ADDED,
          quantity: 0,
          responsible: record?.responsible || null,
          providerType: undefined,
          evidence: null,
          cause: undefined,
        }}
        productId={record?._id}
        warehouseId={warehouseId}
        isDirectory={isDirectory}
        stock={record?.available} // stock available
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
