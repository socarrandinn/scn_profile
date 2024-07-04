import { PageLayout } from 'layouts/index';
import { memo } from 'react';
import { ProductDiscountDetailsHeader } from '../components/ProductDiscountDetailsHeader';
import ProductDiscountProductContainer from './ProductDiscountProductContainer';

const ProductDiscountDetailsContainer = () => (
  <PageLayout mb={8}>
    <ProductDiscountDetailsHeader />
    <ProductDiscountProductContainer />
  </PageLayout>
);

export default memo(ProductDiscountDetailsContainer);
