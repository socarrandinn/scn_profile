import { memo } from 'react';
import { ProductDetailsContent } from 'modules/inventory/product/components/ProductDetailsContent';
import { ProductDetailProvider } from 'modules/inventory/product/contexts/ProductDetail';
import { ProductHeaderDetails } from 'modules/inventory/product/components/ProductHeaderDetails';
import { PageLayout } from 'layouts/index';

const ProductDetailContainer = () => (
  <ProductDetailProvider>
    <ProductHeaderDetails />
    <PageLayout>
      <ProductDetailsContent />
    </PageLayout>
  </ProductDetailProvider>
);

export default memo(ProductDetailContainer);
