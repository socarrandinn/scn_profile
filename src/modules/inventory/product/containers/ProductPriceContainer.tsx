import { memo } from 'react';
import { ProductPrice } from 'modules/inventory/product/components/ProductPrice';
import { PageLayout } from 'layouts/index';

const ProductPriceContainer = () => {
  return (
    <PageLayout mb={3}>
      <ProductPrice />
    </PageLayout>
  );
};

export default memo(ProductPriceContainer);
