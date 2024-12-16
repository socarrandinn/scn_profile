import { memo } from 'react';
import { Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindProductStock } from 'modules/inventory/product/hooks/useFindProductStock';
import { STOCK_OPERATIONS } from 'modules/inventory/product-stock/constants/stock-operations.constants';
import ProductWarehouseStockCreateModal from 'modules/inventory/product-stock/containers/ProductWarehouseStockCreateModal';
import { IProduct } from '../../interfaces/IProduct';
import ProductUpdateStockForm from 'modules/inventory/product-stock/components/UpdateStocksForm/ProductUpdateStockForm';
import { TransTypography } from 'components/TransTypography';
import { AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';

const ProductInventoryListToolbar = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onOpen } = useToggle();
  const { product } = useProductDetail();
  const { data } = useFindProductStock(product?._id);

  return (
    <>
      <Typography variant='subtitle2'>{t('section.inventory.title')}</Typography>
      <FlexBox my={2} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant='subtitle2'>
          {t('section.inventory.total')}: {data?.data?.stock}
        </Typography>
        <PermissionCheck permissions={STOCK_PERMISSIONS.WRITE}>
          <AddButton onClick={onOpen} variant='contained'>
            {t('section.inventory.add')}
          </AddButton>
        </PermissionCheck>
      </FlexBox>
      <ProductWarehouseStockCreateModal
        title={<TransTypography message={'product:stock.title'} values={{ name: product?.name }} />}
        open={isOpen}
        onClose={onClose}
        Form={ProductUpdateStockForm} // this form by product-> inventory section
        initValue={{
          warehouse: null,
          note: '',
          operation: STOCK_OPERATIONS.ADDED,
          quantity: 1,
          item: product as IProduct,
        }}
      />
    </>
  );
};

export default memo(ProductInventoryListToolbar);
