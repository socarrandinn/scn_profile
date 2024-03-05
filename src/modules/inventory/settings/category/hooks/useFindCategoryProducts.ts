import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_CATEGORY_LIST_KEY } from 'modules/inventory/product/constants/query-keys';

export const useFindCategoryProducts = (categoryId: string | undefined) => {
  const filter = useMemo(() => {
    return new TermFilter({ field: 'category._id', value: categoryId });
  }, [categoryId]);

  const { fetch, queryKey, filters } = useTableRequest(ProductService.search, filter);
  const query = useQuery([PRODUCTS_CATEGORY_LIST_KEY, queryKey], fetch, {
    enabled: !!categoryId,
  });

  return {
    ...query,
    filters,
  };
};
