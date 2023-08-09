import { createContext, useContext } from 'react';
import { useParams } from 'react-router';
import { useFindOneProducts } from 'modules/inventory/provider/supplier/hooks/useFindOneProducts';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';

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
type ProviderProductsContextPorps = {
  children: any;
};

const ProvideProducstDetailProvider = (props: ProviderProductsContextPorps) => {
  const { id } = useParams();

  const { isLoading, data: providerProducts, error } = useFindOneProducts(id ?? null);

  return <ProviderProductsContext.Provider
    value={{ providerProducts, isLoading, error, providerProductsId: id as string }} {...props} />;
};

const ProviderProductsDetail = () => {
  const context = useContext(ProviderProductsContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { ProviderProductsDetail, ProvideProducstDetailProvider };
