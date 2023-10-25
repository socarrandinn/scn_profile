import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';

export const useFindProducts = () => {
  const { fetch, queryKey } = useTableRequest(ProductService.search);

  return useQuery([PRODUCTS_LIST_KEY, queryKey], fetch);
};
