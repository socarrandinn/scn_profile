import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { createContext, useContext } from 'react';
import { useParams } from 'react-router';
import { useFindOneProductDiscount } from '../hooks/useFindOneProductDiscount';
import { IProductDiscount } from '../interfaces';

// Data value of the provider context
type ProductDiscountContextValue = {
  discount?: IProductDiscount;
  isLoading: boolean;
  error?: any;
  id: string;
};
// default value of the context
const defaultValue: ProductDiscountContextValue = {
  isLoading: true,
  id: '',
};

// create context
const ProductDiscountContext = createContext<ProductDiscountContextValue>(defaultValue);

// Proptypes of Provider component
type ProductContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const ProductDiscountDetailsProvider = (props: ProductContextProps) => {
  const { id } = useParams();
  const discountId: string = id as string;
  const { isInitialLoading: isLoading, data: discount, error } = useFindOneProductDiscount(discountId ?? null);
  // @ts-ignore
  useBreadcrumbName(discountId, discount?.name, isLoading);

  return <ProductDiscountContext.Provider value={{ id: discountId, discount, isLoading, error }} {...props} />;
};

// Default hooks to retrieve context data
const useProductDiscountDetails = () => {
  const context = useContext(ProductDiscountContext);
  if (context === undefined) {
    throw new Error('You must be inside a ProductDiscountDetailsProvider component');
  }
  return context;
};

export { ProductDiscountDetailsProvider, useProductDiscountDetails };

