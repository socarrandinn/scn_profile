import { useQuery } from '@tanstack/react-query';
import { HomeDeliveryService } from 'modules/sales/settings/home-delivery/services';
import { HOME_DELIVERIES_KEY } from 'modules/sales/settings/home-delivery/constants';
import { useCallback } from 'react';
import { IHomeDelivery } from 'modules/sales/settings/home-delivery/interfaces';

export const useFindOneShippingHomeSettings = () => {
  const fetch = useCallback(() => HomeDeliveryService.getSettings(), []);
  return useQuery<IHomeDelivery>([HOME_DELIVERIES_KEY], fetch);
};
