import { useUser } from '@dfl/react-security';
import { isEmpty } from 'lodash';
import { ProviderType } from 'modules/inventory/provider/common/interfaces';

type ActorSecurity = {
  isProvider: boolean;
  isLogisticProvider: boolean;
  isNationalLogistic: boolean;
  isManufacturer: boolean;
  isProductProvider: boolean;
  manufacturer?: string;
  stores?: any;
  providerType: ProviderType;
  currentProvider: any;
  isLoading: boolean;
};

export const useActorSecurity = (): ActorSecurity => {
  const { user, isLoading } = useUser();

  // no user in case of loading
  const isProvider = !user || !!user?.provider?.id;
  const providerType = user?.provider?.type;
  const currentProvider = user?.provider;
  const stores = user?.provider?.store;
  const manufacturer = user?.manufacturer;

  return {
    isProvider,
    isLogisticProvider: isProvider && providerType === ProviderType.LOGISTIC,
    isProductProvider: isProvider && providerType === ProviderType.PRODUCT,
    isNationalLogistic: isEmpty(stores),
    manufacturer,
    isManufacturer: !!manufacturer,
    stores: stores ? (Array.isArray(stores) ? stores : [stores]) : stores,
    providerType,
    currentProvider,
    ...currentProvider,
    isLoading,
  };
};
