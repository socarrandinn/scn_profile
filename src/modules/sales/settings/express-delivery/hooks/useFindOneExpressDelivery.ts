import { useQuery } from '@tanstack/react-query';
import { ExpressDeliveryService } from 'modules/sales/settings/express-delivery/services';
import { EXPRESS_DELIVERIES_ONE_KEY } from 'modules/sales/settings/express-delivery/constants';
import { useCallback } from 'react';
import { IExpressDelivery } from 'modules/sales/settings/express-delivery/interfaces';

export const useFindOneExpressDelivery = (id: string | null) => {
  const fetch = useCallback(() => ExpressDeliveryService.getOne(id as string), [id]);
  return useQuery<IExpressDelivery>([id, EXPRESS_DELIVERIES_ONE_KEY], fetch, { enabled: !!id });
};
