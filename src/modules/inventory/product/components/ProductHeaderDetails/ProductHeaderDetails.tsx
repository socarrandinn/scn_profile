import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { Box } from '@mui/material';
import { PermissionCheck, RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { productDetailsTabs } from 'modules/inventory/product/constants/tabs.product.details';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { ProductDeleteButton, ProductEditButton } from 'modules/inventory/product/components/ProductDetailActions';
import { ProductStatusPicker } from 'modules/inventory/product/components/ProductStatusPicker';

const ProductHeaderDetails = () => {
  const { id, product, isLoading, error } = useProductDetail();
  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={product?.name || ''}
      subtitle={product?.code || ''}
      logo={product?.media?.[0]}
      actions={<Actions productId={product?._id as string} visible={product?.visible as boolean} />}
    >
      <RouterTab
        tabs={productDetailsTabs}
        prefix={`/inventory/products/${id}`}
        translationNs={'provider'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(ProductHeaderDetails);

type ActionsProps = {
  visible: boolean;
  productId: string;
};

export const Actions = ({ productId, visible }: ActionsProps) => {
  return (
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}>
        <ProductEditButton />
      </PermissionCheck>
      <ProductStatusPicker value={visible} productId={productId} button />
      <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}>
        <ProductDeleteButton />
      </PermissionCheck>
    </Box>
  );
};
