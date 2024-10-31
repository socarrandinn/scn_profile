import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_WAREHOUSE_LIST_KEY } from '../constants/query-keys';
import { useManufactureDetailContext } from 'modules/inventory/provider/manufacture/context/ManufactureDetail';

export const useFindProductsByManufacturer = () => {
  const { manufacturerId } = useManufactureDetailContext();

  const filter = useMemo(() => {
    return new TermFilter({ field: 'providers.manufacturer.providerId', value: manufacturerId, objectId: true });
  }, [manufacturerId]);

  const { fetch, queryKey, filters } = useTableRequest(ProductService.search, filter);
  const query = useQuery([PRODUCTS_WAREHOUSE_LIST_KEY, queryKey], fetch, {
    enabled: !!manufacturerId,
  });

  return {
    ...query,
    filters,
  };
};
