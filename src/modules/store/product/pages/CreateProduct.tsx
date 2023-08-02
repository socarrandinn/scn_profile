import { memo } from 'react';
import { CreateProductProvider } from 'modules/store/product/contexts/CreateProductContext';
import ProductCreate from 'modules/store/product/containers/ProductCreate';

const CreateProduct = () => {
  return (
    <CreateProductProvider>
      <ProductCreate />
    </CreateProductProvider>
  );
};

export default memo(CreateProduct);
