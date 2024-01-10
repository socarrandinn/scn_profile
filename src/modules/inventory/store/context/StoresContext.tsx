import { createContext, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useFindStores } from '../hooks/useFindStores';

// Data value of the provider context
type StoresContextValue = {
  data?: any;
  isLoading?: boolean;
  error?: unknown;
};
// default value of the context
const defaultValue: StoresContextValue = {};

// create context
const StoresContext = createContext<StoresContextValue>(defaultValue);

// Proptypes of Provider component
type StoresContextProps = ChildrenProps & {
  children: any;
};

/**
 * Provider component
 * */
const StoresProvider = (props: StoresContextProps) => {
  const { data, isLoading, error } = useFindStores();
  return <StoresContext.Provider value={{ data, isLoading, error }} {...props} />;
};

// Default hook to retrieve context data
const useAllStoresContext = () => {
  const context = useContext(StoresContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { StoresProvider, useAllStoresContext };
