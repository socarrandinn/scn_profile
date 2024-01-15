import { createContext, useContext } from 'react';
import { useParams } from 'react-router';
import { useFindOneProducts } from 'modules/inventory/provider/supplier/hooks/useFindOneProducts';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';

type ProviderProductsContextValue = {
  providerProducts?: ISupplier;
  isLoading: boolean;
  error?: any;
  providerProductsId?: string;
};

// default value of the context
const defaultValue: ProviderProductsContextValue = {
  isLoading: true
};

// create context
const ProviderProductsContext = createContext<ProviderProductsContextValue>(defaultValue);

// Proptypes of Provider component
type ProviderProductsContextProps = {
  children: any;
};

const ProviderProductsDetailProvider = (props: ProviderProductsContextProps) => {
  const { id } = useParams();

  const { isLoading, data: providerProducts, error } = useFindOneProducts(id ?? null);

  useBreadcrumbName(providerProducts?._id || '', providerProducts?.name, isLoading);

  return <ProviderProductsContext.Provider
    value={{ providerProducts, isLoading, error, providerProductsId: id as string }} {...props} />;
};

const useProviderProductsDetail = () => {
  const context = useContext(ProviderProductsContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { useProviderProductsDetail, ProviderProductsDetailProvider };
