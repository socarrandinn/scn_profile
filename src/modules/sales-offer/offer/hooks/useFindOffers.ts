import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { OfferOrderService } from 'modules/sales-offer/offer/services';
import { OFFERS_LIST_KEY } from 'modules/sales-offer/offer/constants';

export const useFindOffers = () => {
  const { fetch, queryKey } = useTableRequest(OfferOrderService.search);

  return useQuery([OFFERS_LIST_KEY, queryKey], fetch);
};
