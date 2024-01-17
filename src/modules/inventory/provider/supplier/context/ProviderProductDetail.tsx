import { createContext, useContext } from 'react';
import { useParams } from 'react-router';
import { useFindOneProducts } from 'modules/inventory/provider/supplier/hooks/useFindOneProducts';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import useMultipleToggle from 'hooks/useMultipleToggle';

type ProviderProductsContextValue = {
  providerProducts?: ISupplier;
  isLoading: boolean;
  error?: any;
  providerProductsId?: string;
  onAllToggle?: (open?: boolean) => void;
  onOneClose?: (st: string) => void;
  onOneOpen?: (st: string) => void;
  onOneToggle?: (st: string) => void;
  state?: Record<string, boolean>;
  allOpen?: boolean;
};

// default value of the context
const defaultValue: ProviderProductsContextValue = {
  isLoading: true,
};

// create context
const ProviderProductsContext = createContext<ProviderProductsContextValue>(defaultValue);

// Proptypes of Provider component
type ProviderProductsContextProps = {
  children: any;
};

const states = {
  form_1: false,
  form_2: false,
  form_3: false,
};

const ProviderProductsDetailProvider = (props: ProviderProductsContextProps) => {
  const { id } = useParams();
  const { onAllToggle, onOneClose, onOneOpen, onOneToggle, state, allOpen } = useMultipleToggle(states);
  const { isLoading, data: providerProducts, error } = useFindOneProducts(id ?? null);

  useBreadcrumbName(providerProducts?._id || '', providerProducts?.name, isLoading);

  return (
    <ProviderProductsContext.Provider
      value={{
        providerProducts,
        isLoading,
        error,
        providerProductsId: id as string,
        onAllToggle,
        onOneClose,
        onOneOpen,
        onOneToggle,
        state,
        allOpen,
      }}
      {...props}
    />
  );
};

const useProviderProductsDetail = () => {
  const context = useContext(ProviderProductsContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { useProviderProductsDetail, ProviderProductsDetailProvider };
