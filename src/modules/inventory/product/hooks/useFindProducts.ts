import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';

export const useFindProducts = () => {
  const { fetch, queryKey, search, filters } = useTableRequest(ProductService.search);

  const query = useQuery([PRODUCTS_LIST_KEY, queryKey], fetch);

  return {
    ...query,
    search,
    filters
  }
};
