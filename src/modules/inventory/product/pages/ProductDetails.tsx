import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import ProductDetailContainer from '../containers/ProductDetailContainer';

const ProductDetails = () => {
  return (
    <PageLayout>
      <ProductDetailContainer />
    </PageLayout>
  );
};

export default memo(ProductDetails);
