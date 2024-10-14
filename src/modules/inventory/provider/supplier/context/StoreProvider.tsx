import { createContext, useContext } from 'react';

type StoreContextValue = {
  warehouseId: string;
};

// default value of the context
const defaultValue: StoreContextValue = {
  warehouseId: '',
};

// create context
const StoreContext = createContext<StoreContextValue>(defaultValue);

// Proptypes of Provider component
type StoreContextProps = {
  children: React.ReactNode;
  warehouseId: string;
};

const StoreContextProvider = ({ children, warehouseId }: StoreContextProps) => {
  return <StoreContext.Provider value={{ warehouseId }}>{children}</StoreContext.Provider>;
};

const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { useStoreContext, StoreContextProvider };
