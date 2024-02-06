import { createContext, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useFindStorePickup } from '../hooks/useFindStorePickup';
import { IStorePickup } from '../interfaces';
// Data value of the provider context
type StorePickupContextValue = {
  data?: IStorePickup;
  isLoading?: boolean;
  error?: any;
};
// default value of the context
const defaultValue: StorePickupContextValue = {};

// create context
const StorePickupContext = createContext<StorePickupContextValue>(defaultValue);

// Proptypes of Provider component
type StorePickupContextProps = ChildrenProps & {
  children: any;
};

/**
 * Provider component
 * */
const StorePickupProvider = (props: StorePickupContextProps) => {
  const { data, isLoading, error } = useFindStorePickup();

  return <StorePickupContext.Provider value={{ data, isLoading, error }} {...props} />;
};

// Default hook to retrieve context data
const useStorePickupContext = () => {
  const context = useContext(StorePickupContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { StorePickupProvider, useStorePickupContext };
