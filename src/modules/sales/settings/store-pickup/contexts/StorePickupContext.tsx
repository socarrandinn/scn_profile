import { createContext, useContext, useMemo } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useFindStorePickup } from '../hooks/useFindStorePickup';
import { IStorePickup, IPlace } from '../interfaces';
// Data value of the provider context
type StorePickupContextValue = {
  data?: {
    data?: IStorePickup;
  };
  places?: IPlace[]
  isLoading?: boolean;
  isError?: boolean;
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
  const { data, isLoading, error, isError } = useFindStorePickup();

  const places = useMemo(() => data?.data?.places, [data?.data?.places])

  return <StorePickupContext.Provider value={{ data, isLoading, error, places, isError}} {...props} />;
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
