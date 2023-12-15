import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { ProductDetailsContent } from 'modules/inventory/product/components/ProductDetailsContent';
import { ProductSummary } from 'modules/inventory/product/components/ProductSummary';
import { ProductDetailProvider } from 'modules/inventory/product/contexts/ProductDetail';
import { ProductHeaderDetails } from '../components/ProductHeaderDetails';

const ProductDetailContainer = () => (
  <ProductDetailProvider>
    <ProductHeaderDetails />
    <DetailLayout marginTop={{ xs: 2, md: 3 }}>
      <DetailSummary>
        <ProductSummary />
      </DetailSummary>
      <DetailContent ghost sx={{ '& .MuiBox-root': { paddingTop: 0 } }}>
        <ProductDetailsContent />
      </DetailContent>
    </DetailLayout>
  </ProductDetailProvider>
);

export default memo(ProductDetailContainer);
