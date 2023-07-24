import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ProductsService } from 'modules/provider/products/services';
import { PRODUCTS_LIST_KEY } from 'modules/provider/products/constants';

export const useFindProducts = () => {
  const { fetch, queryKey } = useTableRequest(ProductsService.search);

  return useQuery([PRODUCTS_LIST_KEY, queryKey], fetch);
};
