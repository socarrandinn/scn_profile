import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { ProductDetailsContent } from 'modules/inventory/product/components/ProductDetailsContent';
import { ProductSummary } from 'modules/inventory/product/components/ProductSummary';
import BannerDetail from 'modules/inventory/product/components/BannerDetail/BannerDetail';
import { ProductDetailProvider } from 'modules/inventory/product/contexts/ProductDetail';

const ProductDetailContainer = () => (
  <ProductDetailProvider>
    <BannerDetail />
    <DetailLayout>
      <DetailSummary>
        <ProductSummary />
      </DetailSummary>
      <DetailContent ghost>
        <ProductDetailsContent />
      </DetailContent>
    </DetailLayout>
  </ProductDetailProvider>
);

export default memo(ProductDetailContainer);
