import { memo } from 'react';
import ProductDetailContainer from '../containers/ProductDetailContainer';
import { PageLayout } from 'layouts/index';

const ProductDetails = () => {
  return (
    <PageLayout>
      <ProductDetailContainer />
    </PageLayout>
  );
};

export default memo(ProductDetails);
