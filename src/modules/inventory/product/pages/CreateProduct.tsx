import { memo } from 'react';
// import { CreateProductProvider } from 'modules/inventory/product/contexts/CreateProductContext';
import ProductCreate from 'modules/inventory/product/containers/ProductCreate';

const CreateProduct = () => {
  return (
  /* <CreateProductProvider> */
      <ProductCreate />
  /* </CreateProductProvider> */
  );
};

export default memo(CreateProduct);
