import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { PROVIDER_PRODUCT_LIST_KEY } from '../../common/constants/querys';
import { ProductService } from 'modules/inventory/product/services';

export const useFindSupplierProducts = (providerProductId: string | undefined) => {
  const filter = useMemo(() => {
    return new TermFilter({ field: 'providers.supplier.providerId', value: providerProductId });
  }, [providerProductId]);

  const { fetch, queryKey, filters } = useTableRequest(ProductService.search, filter);
  const query = useQuery([PROVIDER_PRODUCT_LIST_KEY, queryKey], fetch, {
    enabled: !!providerProductId,
  });

  console.log('QKey: ', queryKey)
  console.log('Filters: ', filters)

  return {
    ...query,
    filters,
  };
};
