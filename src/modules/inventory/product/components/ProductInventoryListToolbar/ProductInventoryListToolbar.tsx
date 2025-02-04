import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { STOCK_OPERATIONS } from 'modules/inventory/product-stock/constants/stock-operations.constants';
import ProductWarehouseStockCreateModal from 'modules/inventory/product-stock/containers/ProductWarehouseStockCreateModal';
import { IProduct } from '../../interfaces/IProduct';
import ProductUpdateStockForm from 'modules/inventory/product-stock/components/UpdateStocksForm/ProductUpdateStockForm';
import { TransTypography } from 'components/TransTypography';
import { AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import ButtonRefresh from 'modules/inventory/common/components/ButtonRefresh/ButtonRefresh';
import { PRODUCTS_WAREHOUSE_STOCK } from '../../constants/query-keys';
import { IStockResume } from 'modules/inventory/product-stock/interfaces/IStock';

type Props = {
  stockResume: IStockResume;
};
const ProductInventoryListToolbar = ({ stockResume }: Props) => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onOpen } = useToggle();
  const { product } = useProductDetail();

  return (
    <>
      <Typography variant='subtitle2'>{t('section.inventory.title')}</Typography>
      <FlexBox my={2} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant='subtitle2'>
          {t('section.inventory.total')}: {stockResume?.available}
        </Typography>
        <PermissionCheck permissions={STOCK_PERMISSIONS.WRITE}>
          <Stack sx={{ gap: 1, flexDirection: 'row' }}>
            <ButtonRefresh queryKey={[[PRODUCTS_WAREHOUSE_STOCK]]} />
            <AddButton action={onOpen} variant='contained'>
              {t('section.inventory.add')}
            </AddButton>
          </Stack>
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
