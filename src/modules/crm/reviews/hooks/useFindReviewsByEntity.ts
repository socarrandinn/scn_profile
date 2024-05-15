import { useTableRequest } from '@dfl/mui-admin-layout';
import { PRODUCTS_RATE_LIST } from 'modules/inventory/product/constants/query-keys';
import { useQuery } from '@tanstack/react-query';
import { AdminReviewsService } from '../services';

export const useFindReviewsByEntity = (entityId: string) => {
  const { fetch, queryKey } = useTableRequest(
    async (params) => await AdminReviewsService.searchByEntity({ ...params, entityId }),
  );
  return useQuery([PRODUCTS_RATE_LIST, queryKey], fetch);
};
