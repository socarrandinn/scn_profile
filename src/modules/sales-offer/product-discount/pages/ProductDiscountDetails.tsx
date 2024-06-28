import { memo } from 'react';
import ProductDiscountDetailsContainer from '../containers/ProductDiscountDetailsContainer';
import { ProductDiscountDetailsProvider } from '../contexts/ProductDiscountDetails';

const ProductDiscountDetails = () => {

  return (
    <ProductDiscountDetailsProvider >
      <ProductDiscountDetailsContainer />
    </ProductDiscountDetailsProvider>
  );
};

export default memo(ProductDiscountDetails);
