import { createContext, useContext } from 'react';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { useFindOneShipping } from 'modules/sales/settings/home-delivery/hooks/useFindOneShippingHomeSettings';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';

// Data value of the provider context
type ShippingHomeContextValue = {
  settings?: IDelivery;
  isLoading: boolean;
  distributionCenterId?: string;
  error?: any;
};
// default value of the context
const defaultValue: ShippingHomeContextValue = {
  isLoading: true,
  distributionCenterId: '',
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
  const { distributionCenterId } = useDistributionCenterDetail();
  const { isLoading, data: settings, error } = useFindOneShipping(Boolean(distributionCenterId))(distributionCenterId ?? null);

  return <ShippingHomeContext.Provider value={{ settings, isLoading, error, distributionCenterId }} {...props} />;
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
