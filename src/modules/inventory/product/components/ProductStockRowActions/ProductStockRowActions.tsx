import { memo } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import InventoryIcon from '@mui/icons-material/Inventory';

type ProductStockRowProps = {
  record: any;
  store: any;
  isDirectory?: boolean;
};

const ProductStockRowActions = ({ record, store, isDirectory }: ProductStockRowProps) => {
  const { t } = useTranslation('product');
  /* const { isOpen, onClose, onOpen } = useToggle();
  const { stores } = useActorSecurity();

  const handleUpdateStock = useCallback(() => {
    onOpen();
  }, [onOpen]);
  const storeId = stores?.[0] || store; */
  return (
    <>
      {/* <ProductStockCreateModal
        title={t('updateStockTitle', { name: record?.name })}
        open={isOpen}
        onClose={onClose}
        initValue={{
          item: record?._id,
          store: storeId,
          operation: PRODUCT_STOCK_OPERATIONS.ADDED,
          quantity: 0,
        }}
        productId={record?._id || ''}
        storeId={storeId}
        isDirectory={isDirectory}
      /> */}
      <Stack direction='row' spacing={1}>
        <Button startIcon={<InventoryIcon />} variant={'outlined'} onClick={() => '' /* handleUpdateStock */}>
          <Typography display={{ xs: 'none', md: 'block' }}>{t('updateStock')}</Typography>
        </Button>
      </Stack>
    </>
  );
};

export default memo(ProductStockRowActions);
