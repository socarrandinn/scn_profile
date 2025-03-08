import { useQuery } from '@tanstack/react-query';
import { HomeDeliveryService } from 'modules/sales/settings/home-delivery/services';
import { HOME_DELIVERIES_GLOBAL__CENTER_KEY, HOME_DELIVERIES_GLOBAL_KEY } from 'modules/sales/settings/home-delivery/constants';
import { useCallback, } from 'react';
import { IDelivery } from 'modules/sales/settings/common/interfaces';

export const useFindOneShippingHomeSettings = () => {
  const fetch = useCallback(() => HomeDeliveryService.getSettings(), []);
  return useQuery<IDelivery>([HOME_DELIVERIES_GLOBAL_KEY], fetch);
};

export const useFindOneShippingCenterSettings = (distributionCenterId: string) => {
  const fetch = useCallback(() => HomeDeliveryService.getCenterSettings(distributionCenterId), [distributionCenterId]);
  return useQuery<IDelivery>([HOME_DELIVERIES_GLOBAL__CENTER_KEY, distributionCenterId], fetch);
};

export const useFindOneShipping = (isCenter: boolean) => {
  switch (isCenter) {
    case true:
      return useFindOneShippingCenterSettings;
    default:
      return useFindOneShippingHomeSettings;
  }
};
