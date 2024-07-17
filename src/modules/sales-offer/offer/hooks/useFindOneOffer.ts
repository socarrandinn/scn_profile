import { useQuery } from '@tanstack/react-query';
import { OFFERS_ONE_KEY } from 'modules/sales-offer/offer/constants';
import { useCallback } from 'react';
import { IOffer } from 'modules/sales-offer/offer/interfaces';
import { OfferOrderService } from '../services';

export const useFindOneOffer = (id: string | null) => {
  const fetch = useCallback(() => OfferOrderService.getOne(id as string), [id]);
  return useQuery<IOffer>([id, OFFERS_ONE_KEY], fetch, { enabled: !!id });
};
