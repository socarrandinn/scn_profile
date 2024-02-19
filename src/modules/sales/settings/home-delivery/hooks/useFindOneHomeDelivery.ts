import { useQuery } from '@tanstack/react-query';
import { HomeDeliveryService } from 'modules/sales/settings/home-delivery/services';
import { HOME_DELIVERIES_ONE_KEY } from 'modules/sales/settings/home-delivery/constants';
import { useCallback } from 'react';
import { IHomeDelivery } from 'modules/sales/settings/home-delivery/interfaces';

export const useFindOneHomeDelivery = (id: string | null) => {
  const fetch = useCallback(() => HomeDeliveryService.getOne(id as string), [id]);
  return useQuery<IHomeDelivery>([id, HOME_DELIVERIES_ONE_KEY], fetch, { enabled: !!id });
};
