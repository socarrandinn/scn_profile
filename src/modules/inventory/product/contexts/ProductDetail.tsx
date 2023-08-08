import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useFindOneProduct } from 'modules/inventory/product/hooks/useFindOneProduct';
import { useParams } from 'react-router';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { IProduct } from 'modules/inventory/common/interfaces';
import { useUser } from '@dfl/react-security';

// Data value of the provider context
type ProductContextValue = {
  product?: IProduct;
  setProduct?: Dispatch<SetStateAction<IProduct | undefined>>;
  isLoading: boolean;
  isMe: boolean;
  error?: any;
  id: string;
};
// default value of the context
const defaultValue: ProductContextValue = {
  isLoading: true,
  id: '',
  isMe: false,
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
  const { user } = useUser();
  const productId: string = id || user?._id;
  const isMe = !id;
  const { isLoading, data, error } = useFindOneProduct(productId ?? null);
  // @ts-ignore
  useBreadcrumbName(data?._id || '', data?.general?.firstName, isLoading);

  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data, setProduct]);

  return <ProductContext.Provider value={{ id: productId, isMe, product, setProduct, isLoading, error }} {...props} />;
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
