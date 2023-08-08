import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ProductsService } from 'modules/inventory/provider/products/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/provider/products/constants';

export const useFindProducts = () => {
  const { fetch, queryKey } = useTableRequest(ProductsService.search);

  return useQuery([PRODUCTS_LIST_KEY, queryKey], fetch);
};
