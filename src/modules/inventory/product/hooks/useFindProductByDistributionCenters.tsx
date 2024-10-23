import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from 'modules/inventory/product/services';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import { PRODUCTS_DISTRIBUTION_CENTER_LIST_KEY } from '../constants/query-keys';

export const useFindProductByDistributionCenters = () => {
  const { distributionCenterId } = useDistributionCenterDetail();

  const filter = useMemo(() => {
    const storeFilter = { field: 'stock.distributionCenters', value: distributionCenterId };
    return new TermFilter(storeFilter);
  }, [distributionCenterId]);

  const { fetch, queryKey, filters } = useTableRequest(ProductService.search, filter);
  const query = useQuery([PRODUCTS_DISTRIBUTION_CENTER_LIST_KEY, queryKey], fetch, {
    enabled: !!distributionCenterId,
  });

  return {
    ...query,
    filters,
  };
};
