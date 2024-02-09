import { memo } from 'react';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@dfl/mui-react-common';
import { useToggle } from '@dfl/hook-utils';
import AviableProductEditModal from 'modules/inventory/product/containers/ProductTabs/AviableProductEditModal';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';

type UserStatusProps = {
  rowId: string;
};

const ProductInventoryStoreUpdateButton = ({ rowId }: UserStatusProps) => {
  const { t } = useTranslation('product');
  const { isOpen, onOpen, onClose } = useToggle();
  const { product } = useProductDetail();

  return (
    <>
      <LoadingButton variant='outlined' startIcon={<InventoryIcon />} onClick={onOpen}>
        {t('section.inventory.update')}
      </LoadingButton>
      <AviableProductEditModal
        open={isOpen}
        onClose={onClose}
        initValue={{
          store: rowId,
          quantity: 0,
          cause: 'OTHERS',
          operation: PRODUCT_STOCK_OPERATIONS.ADDED,
        }}
        productId={product?._id as string}
      />
    </>
  );
};

export default memo(ProductInventoryStoreUpdateButton);
