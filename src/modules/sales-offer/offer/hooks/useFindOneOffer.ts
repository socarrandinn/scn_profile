import { useQuery } from '@tanstack/react-query';
import { OfferService } from 'modules/sales-offer/offer/services';
import { OFFERS_ONE_KEY } from 'modules/sales-offer/offer/constants';
import { useCallback } from 'react';
import { IOffer } from 'modules/sales-offer/offer/interfaces';

export const useFindOneOffer = (id: string | null) => {
  const fetch = useCallback(() => OfferService.getOne(id as string), [id]);
  return useQuery<IOffer>([id, OFFERS_ONE_KEY], fetch, { enabled: !!id });
};
