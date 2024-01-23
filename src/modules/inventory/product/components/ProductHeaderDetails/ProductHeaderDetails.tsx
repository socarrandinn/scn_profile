import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { Button } from '@mui/material';
import { PermissionCheck, RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { productDetailsTabs } from 'modules/inventory/product/constants/tabs.product.details';
import { FlexBox } from '@dfl/mui-react-common';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { useTranslation } from 'react-i18next';
import { ProductDeleteButton } from 'modules/inventory/product/components/ProductDetailActions';

const ProductHeaderDetails = () => {
  const { id, product, isLoading, error } = useProductDetail();
  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={product?.name || ''}
      subtitle={product?.code || ''}
      logo={product?.media?.[0]?.url}
      actions={<Actions />}
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

export const Actions = () => {
  const { t } = useTranslation('product');

  return (
    <>
      <FlexBox gap={1} mt={1} mb={2}>
        <Button variant={'outlined'} size={'small'} disabled>
          {t('inventoryReport')}
        </Button>
        <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}>
          <ProductDeleteButton />
        </PermissionCheck>
      </FlexBox>
    </>
  );
};
