import { createContext, useContext } from 'react';
import { useParams } from 'react-router';
import { useFindOneProducts } from 'modules/provider/products/hooks/useFindOneProducts';
import { IProducts } from 'modules/provider/products/interfaces';

type ProvedorProductsContextValue = {
  provedorProducts?: IProducts;
  isLoading: boolean;
  error?: any;
  provedorProductsId?: string;
};

// default value of the context
const defaultValue: ProvedorProductsContextValue = {
  isLoading: true
};

// create context
const ProvedorProductsContext = createContext<ProvedorProductsContextValue>(defaultValue);

// Proptypes of Provider component
type ProvedorProductsContextPorps = {
  children: any;
};

const ProvideProducstDetailProvider = (props: ProvedorProductsContextPorps) => {
  const { id } = useParams();

  const { isLoading, data: provedorProducts, error } = useFindOneProducts(id ?? null);

  return <ProvedorProductsContext.Provider
    value={{ provedorProducts, isLoading, error, provedorProductsId: id as string }} {...props} />;
};

const ProvedorProductsDetail = () => {
  const context = useContext(ProvedorProductsContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { ProvedorProductsDetail, ProvideProducstDetailProvider };
