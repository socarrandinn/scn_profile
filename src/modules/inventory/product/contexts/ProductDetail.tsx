import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useFindOneProduct } from 'modules/inventory/product/hooks/useFindOneProduct';
import { useParams } from 'react-router';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { IProduct } from 'modules/inventory/common/interfaces';
import { useSearchParams } from 'react-router-dom';
import useMultipleToggle from 'hooks/useMultipleToggle';

// Data value of the provider context
type ProductContextValue = {
  product?: IProduct;
  setProduct?: Dispatch<SetStateAction<IProduct | undefined>>;
  isLoading: boolean;
  error?: any;
  id: string;
  onAllToggle?: (open?: boolean) => void;
  onOneClose?: (st: string) => void;
  onOneOpen?: (st: string) => void;
  onOneToggle?: (st: string) => void;
  state?: Record<string, boolean>;
  allOpen?: boolean;
};
// default value of the context
const defaultValue: ProductContextValue = {
  isLoading: true,
  id: '',
};

// create context
const ProductContext = createContext<ProductContextValue>(defaultValue);

type ProductContextProps = {
  children: any;
};

const states = {
  form_1: false,
  form_2: false,
  form_3: false,
  form_4: false,
  form_5: false,
  form_6: false,
  form_7: false,
  form_8: false,
  form_9: false,
};

/**
 * Provider component
 * */
const ProductDetailProvider = (props: ProductContextProps) => {
  const { id } = useParams();
  const productId: string = id as string;
  const [searchParams] = useSearchParams();
  const isEdit = searchParams.get('edit');

  const { onAllToggle, onOneClose, onOneOpen, onOneToggle, state, allOpen } = useMultipleToggle(states);

  const { isLoading, data, error } = useFindOneProduct(productId ?? null);

  console.log('data', data)

  const [product, setProduct] = useState<IProduct>();

  useBreadcrumbName(id || '', product?.name, isLoading);

  useEffect(() => {
    if (isEdit && !isLoading && data && !product) {
      onAllToggle?.();
    }
  }, [isEdit, data, onAllToggle, isLoading, product]);

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data, setProduct]);

  return (
    <ProductContext.Provider
      value={{
        id: productId,
        product,
        setProduct,
        isLoading,
        error,
        onAllToggle,
        onOneClose,
        onOneOpen,
        onOneToggle,
        state,
        allOpen,
      }} {...props}
    />
  );
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
