import { useQuery } from '@tanstack/react-query';
import { ExpressDeliveryService } from 'modules/sales/settings/express-delivery/services';
import { EXPRESS_DELIVERIES_ONE_KEY } from 'modules/sales/settings/express-delivery/constants';
import { useCallback } from 'react';
import { IDelivery } from '../../home-delivery/interfaces';

export const useFindOneExpressDelivery = () => {
  const fetch = useCallback(() => ExpressDeliveryService.getSettings(), []);
  return useQuery<IDelivery>([EXPRESS_DELIVERIES_ONE_KEY], fetch);
};
