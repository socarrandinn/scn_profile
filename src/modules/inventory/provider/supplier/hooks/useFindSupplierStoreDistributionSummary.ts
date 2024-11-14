import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { ProductAnalyticService } from 'modules/inventory/common/services';
import { SUPPLIER_STORE_DISTRIBUTION_SUMMARY } from 'modules/inventory/provider/supplier/constants';

export const useFindSupplierStoreDistributionSummary = () => {
  const { id: providerId } = useParams();

  const filter = useMemo(() => {
    return new TermFilter({ field: 'providers.supplier._id', value: providerId, objectId: true });
  }, [providerId]);

  const { fetch, filters } = useTableRequest(ProductAnalyticService.storeDistributionSummary, filter);
  const query = useQuery([SUPPLIER_STORE_DISTRIBUTION_SUMMARY, providerId], fetch, {
    enabled: !!providerId,
  });

  return {
    ...query,
    filters,
  };
};
