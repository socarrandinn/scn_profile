import { createContext, useContext } from 'react';

type StoreContextValue = {
  storeId: string;
};

// default value of the context
const defaultValue: StoreContextValue = {
  storeId: '',
};

// create context
const StoreContext = createContext<StoreContextValue>(defaultValue);

// Proptypes of Provider component
type StoreContextProps = {
  children: React.ReactNode;
  storeId: string;
};

const StoreContextProvider = ({ children, storeId }: StoreContextProps) => {
  return <StoreContext.Provider value={{ storeId }}>{children}</StoreContext.Provider>;
};

const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { useStoreContext, StoreContextProvider };
