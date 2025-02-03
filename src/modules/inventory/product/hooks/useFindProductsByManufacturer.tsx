import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from 'modules/inventory/product/services';

import { useManufactureDetailContext } from 'modules/inventory/provider/manufacture/context/ManufactureDetail';
import { MANUFACTURER_PRODUCTS_LIST_KEY } from '../constants/query-keys';

export const useFindProductsByManufacturer = () => {
  const { manufacturerId } = useManufactureDetailContext();

  const filter = useMemo(() => {
    return new TermFilter({ field: 'providers.manufacturer._id', value: manufacturerId, objectId: true });
  }, [manufacturerId]);

  const { fetch, queryKey, filters } = useTableRequest(ProductService.search, filter);
  const query = useQuery([MANUFACTURER_PRODUCTS_LIST_KEY, queryKey, manufacturerId], fetch, {
    enabled: !!manufacturerId,
  });

  return {
    ...query,
    filters,
  };
};
