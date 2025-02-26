import { createContext, useContext } from 'react';
import { IDelivery } from 'modules/sales/settings/home-delivery/interfaces';
import { useFindOneExpressDelivery } from '../hooks/useFindOneExpressDelivery';

// Data value of the provider context
type ShippingHomeContextValue = {
  settings?: IDelivery;
  isLoading: boolean;
  error?: any;
};
// default value of the context
const defaultValue: ShippingHomeContextValue = {
  isLoading: true,
};

// create context
const ShippingHomeContext = createContext<ShippingHomeContextValue>(defaultValue);

// Proptypes of Provider component
type ShippingHomeContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const ShippingExpressSettingsProvider = (props: ShippingHomeContextProps) => {
  const { isLoading, data: settings, error } = useFindOneExpressDelivery();

  return <ShippingHomeContext.Provider value={{ settings, isLoading, error }} {...props} />;
};

// Default hooks to retrieve context data
const useShippingExpressSettings = () => {
  const context = useContext(ShippingHomeContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { ShippingExpressSettingsProvider, useShippingExpressSettings };
