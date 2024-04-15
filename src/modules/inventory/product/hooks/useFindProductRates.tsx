import { useTableRequest } from '@dfl/mui-admin-layout';
import { PRODUCTS_RATE_LIST } from 'modules/inventory/product/constants/query-keys';
import { useQuery } from '@tanstack/react-query';
import { ProductRateService } from '../services';

export const useFindProductRates = (productId: string) => {
  /* const { fetch, queryKey } = useTableRequest(() => ProductRateService.searchReview(productId));
  return useQuery([PRODUCTS_RATE_LIST, queryKey], fetch, { staleTime: STALE_TIME, enabled: !!productId }); */

  const { fetch, queryKey } = useTableRequest(
    async (params) => await ProductRateService.searchReview({ ...params, _id: productId }),
  );
  return useQuery([PRODUCTS_RATE_LIST, queryKey, productId], fetch, {
    enabled: !!productId,
  });
};
