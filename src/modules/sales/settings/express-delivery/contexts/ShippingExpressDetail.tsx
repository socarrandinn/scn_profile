import { createContext, useContext } from 'react';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { useFindOneExpressDelivery } from '../../express-delivery/hooks/useFindOneExpressDelivery';

// Data value of the provider context
type ShippingExpressContextValue = {
  settings?: IDelivery;
  isLoading: boolean;
  error?: any;
};
// default value of the context
const defaultValue: ShippingExpressContextValue = {
  isLoading: true,
};

// create context
const ShippingExpressContext = createContext<ShippingExpressContextValue>(defaultValue);

// Proptypes of Provider component
type ShippingExpressContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const ShippingExpressSettingsProvider = (props: ShippingExpressContextProps) => {
  const { isLoading, data: settings, error } = useFindOneExpressDelivery();

  return <ShippingExpressContext.Provider value={{ settings, isLoading, error }} {...props} />;
};

// Default hooks to retrieve context data
const useShippingExpressSettings = () => {
  const context = useContext(ShippingExpressContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { ShippingExpressSettingsProvider, useShippingExpressSettings };
