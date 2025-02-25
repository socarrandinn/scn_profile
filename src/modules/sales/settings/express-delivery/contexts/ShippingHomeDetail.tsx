import { createContext, useContext } from 'react';
import { IDelivery } from 'modules/sales/settings/home-delivery/interfaces';
import {
  useFindOneShippingHomeSettings,
} from 'modules/sales/settings/home-delivery/hooks/useFindOneShippingHomeSettings';
// import { IShippingHome } from 'modules/inventory/common/interfaces';

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
const ShippingHomeSettingsProvider = (props: ShippingHomeContextProps) => {
  const { isLoading, data: settings, error } = useFindOneShippingHomeSettings();

  return <ShippingHomeContext.Provider value={{ settings, isLoading, error }} {...props} />;
};

// Default hooks to retrieve context data
const useShippingHomeSettings = () => {
  const context = useContext(ShippingHomeContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { ShippingHomeSettingsProvider, useShippingHomeSettings };
