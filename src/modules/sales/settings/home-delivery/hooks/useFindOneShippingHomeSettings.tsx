import { useQuery } from '@tanstack/react-query';
import { HomeDeliveryService } from 'modules/sales/settings/home-delivery/services';
import { HOME_DELIVERIES_GLOBAL_KEY } from 'modules/sales/settings/home-delivery/constants';
import { useCallback } from 'react';
import { IDelivery } from 'modules/sales/settings/home-delivery/interfaces';

export const useFindOneShippingHomeSettings = () => {
  const fetch = useCallback(() => HomeDeliveryService.getSettings(), []);
  return useQuery<IDelivery>([HOME_DELIVERIES_GLOBAL_KEY], fetch);
};
