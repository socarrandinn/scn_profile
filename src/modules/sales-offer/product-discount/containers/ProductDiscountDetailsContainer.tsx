import { PageLayout } from 'layouts/index';
import { memo } from 'react';
import { ProductDiscountDetailsProvider } from '../contexts/ProductDiscountDetails';
import { ProductDiscountDetailsHeader } from '../components/ProductDiscountDetailsHeader';

const ProductDiscountDetailsContainer = () => (
  <ProductDiscountDetailsProvider>
    <ProductDiscountDetailsHeader />
    <PageLayout>
    </PageLayout>
  </ProductDiscountDetailsProvider>
);

export default memo(ProductDiscountDetailsContainer);
