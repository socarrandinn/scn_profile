import { PermissionCheck, RouterTab } from '@dfl/react-security';
import { Box } from '@mui/material';
import { ProductDeleteButton } from 'modules/inventory/product/components/ProductDetailActions';
import { productDetailsTabs } from 'modules/inventory/product/constants/tabs.product.details';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { memo } from 'react';
import { PRODUCT_DISCOUNT_PERMISSIONS } from '../../constants';
import { useProductDiscountDetails } from '../../contexts/ProductDiscountDetails';

const ProductDiscountDetailsHeader = () => {
  const { id, discount, isLoading, error } = useProductDiscountDetails();
  if (isLoading) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={discount?.name || ''}
      actions={!error && <Actions /> || <></>}
    >
      <RouterTab
        tabs={productDetailsTabs}
        prefix={`/sales/offers/settings/product_discounts/${ id }`}
        translationNs={'productDiscount'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(ProductDiscountDetailsHeader);

export const Actions = () => {
  return (
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <PermissionCheck permissions={PRODUCT_DISCOUNT_PERMISSIONS.PRODUCT_DISCOUNT_WRITE}>
        <ProductDeleteButton />
      </PermissionCheck>
    </Box>
  );
};
