import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ProductService } from 'modules/inventory/product/services';
import { RELATED_PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';

export const useFindRelatedProducts = () => {
  const { id } = useProductDetail();

  const { fetch, queryKey } = useTableRequest((params, config) =>
    ProductService.searchRelatedProducts(id, params, config),
  );

  return useQuery([RELATED_PRODUCTS_LIST_KEY, queryKey, id], fetch, {
    enabled: !!id,
  });
};
