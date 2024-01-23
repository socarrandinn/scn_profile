import { memo } from 'react';
import { DetailContent, DetailLayout } from '@dfl/mui-form-layout';
import { ProductDetailsContent } from 'modules/inventory/product/components/ProductDetailsContent';
import { ProductDetailProvider } from 'modules/inventory/product/contexts/ProductDetail';
import { ProductHeaderDetails } from 'modules/inventory/product/components/ProductHeaderDetails';

const ProductDetailContainer = () => (
  <ProductDetailProvider>
    <ProductHeaderDetails />
    <DetailLayout marginTop={{ xs: 2, md: 3 }}>
      <DetailContent ghost sx={{ '& .MuiBox-root': { paddingTop: 0 } }}>
        <ProductDetailsContent />
      </DetailContent>
    </DetailLayout>
  </ProductDetailProvider>
);

export default memo(ProductDetailContainer);
