import { useQuery } from '@tanstack/react-query';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';
import { HOME_DELIVERY_PLACE_ONE_KEY } from 'modules/sales/settings/home-delivery/constants';
import { useCallback } from 'react';
import { IDelivery } from 'modules/sales/settings/common/interfaces';

export const useFindOneHomeDelivery = (id: string | null) => {
  const fetch = useCallback(() => HomeDeliveryPlacesService.getOne(id as string), [id]);
  return useQuery<IDelivery>([id, HOME_DELIVERY_PLACE_ONE_KEY], fetch, { enabled: !!id });
};
