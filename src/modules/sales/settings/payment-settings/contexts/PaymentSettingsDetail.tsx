import { createContext, useContext } from 'react';
import { ICurrencySettings } from '../interfaces';
import { useFindPaymentSettings } from '../hooks/useFindPaymentSettings';

// Data value of the provider context
type PaymentSettingsContextValue = {
  settings?: ICurrencySettings;
  isLoading: boolean;
  error?: any;
};
// default value of the context
const defaultValue: PaymentSettingsContextValue = {
  isLoading: true,
};

// create context
const PaymentSettingsContext = createContext<PaymentSettingsContextValue>(defaultValue);

// Proptypes of Provider component
type PaymentSettingsContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const PaymentSettingsProvider = (props: PaymentSettingsContextProps) => {
  const { isLoading, data: settings, error } = useFindPaymentSettings();

  return <PaymentSettingsContext.Provider value={{ settings, isLoading, error }} {...props} />;
};

// Default hooks to retrieve context data
const usePaymentSettings = () => {
  const context = useContext(PaymentSettingsContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { PaymentSettingsProvider, usePaymentSettings };
