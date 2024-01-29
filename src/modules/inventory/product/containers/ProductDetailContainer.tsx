import { memo } from 'react';
import { DetailContent, DetailLayout } from '@dfl/mui-form-layout';
import { ProductDetailsContent } from 'modules/inventory/product/components/ProductDetailsContent';
import { ProductDetailProvider } from 'modules/inventory/product/contexts/ProductDetail';
import { ProductHeaderDetails } from 'modules/inventory/product/components/ProductHeaderDetails';

const ProductDetailContainer = () => (
  <ProductDetailProvider>
    <DetailLayout marginTop={{ xs: 1, md: 1 }}>
      <DetailContent ghost sx={{ '& .MuiBox-root': { paddingTop: 0 } }}>
        <ProductHeaderDetails />
        <ProductDetailsContent />
      </DetailContent>
    </DetailLayout>
  </ProductDetailProvider>
);

export default memo(ProductDetailContainer);
