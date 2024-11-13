import { memo } from 'react';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@dfl/mui-react-common';
import { useToggle } from '@dfl/hook-utils';
import AvailableProductEditModal from 'modules/inventory/product/containers/ProductTabs/AvailableProductEditModal';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';
import { IProduct } from '../../interfaces/IProduct';
import { useStockUtils } from 'modules/inventory/product-stock/hooks/useStockUtils';

type UserStatusProps = {
  rowId: string;
  record: IProduct;
};

const ProductInventoryStoreUpdateButton = ({ rowId, record }: UserStatusProps) => {
  const { t } = useTranslation('product');
  const { isOpen, onOpen, onClose } = useToggle();
  const { product } = useProductDetail();
  const { warehouseArea } = useStockUtils(record, rowId);

  return (
    <>
      <LoadingButton variant='outlined' startIcon={<InventoryIcon />} onClick={onOpen}>
        {t('section.inventory.update')}
      </LoadingButton>
      <AvailableProductEditModal
        open={isOpen}
        onClose={onClose}
        initValue={{
          warehouse: rowId,
          warehouseArea,
          quantity: 0,
          operation: PRODUCT_STOCK_OPERATIONS.ADDED,
          cause: undefined,
        }}
        productId={product?._id as string}
      />
    </>
  );
};

export default memo(ProductInventoryStoreUpdateButton);
