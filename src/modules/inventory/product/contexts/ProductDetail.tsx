import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useFindOneProduct } from 'modules/inventory/product/hooks/useFindOneProduct';
import { useParams } from 'react-router';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { IProduct } from 'modules/inventory/common/interfaces';
import { useUser } from '@dfl/react-security';

// Data value of the provider context
type ProductContextValue = {
  product?: IProduct;
  isLoading: boolean;
  error?: any;
  id: string;
};
// default value of the context
const defaultValue: ProductContextValue = {
  isLoading: true,
  id: '',
};

// create context
const ProductContext = createContext<ProductContextValue>(defaultValue);

// Proptypes of Provider component
type ProductContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const ProductDetailProvider = (props: ProductContextProps) => {
  const { id } = useParams();
  const productId: string = id as string;
  const { isLoading, data: product, error } = useFindOneProduct(productId ?? null);
  // @ts-ignore
  useBreadcrumbName(product?._id || '', product?.name, isLoading);

  return <ProductContext.Provider value={{ id: productId, product, isLoading, error }} {...props} />;
};

// Default hooks to retrieve context data
const useProductDetail = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { ProductDetailProvider, useProductDetail };
