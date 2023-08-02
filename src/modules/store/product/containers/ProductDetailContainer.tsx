import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { ProductDetailsContent } from 'modules/store/product/components/ProductDetailsContent';
import { ProductSummary } from 'modules/store/product/components/ProductSummary';
import BannerDetail from 'modules/store/product/components/BannerDetail/BannerDetail';
import { ProductDetailProvider } from 'modules/store/product/contexts/ProductDetail';

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
