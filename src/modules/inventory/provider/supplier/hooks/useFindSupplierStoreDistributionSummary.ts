import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { ProductAnalyticService } from 'modules/inventory/common/services';
import { SUPPLIER_STORE_DISTRIBUTION_SUMMARY } from 'modules/inventory/provider/supplier/constants';

export const useFindSupplierStoreDistributionSummary = (supplierId?: string) => {
  const filter = useMemo(() => {
    return new TermFilter({ field: 'providers.supplier._id', value: supplierId, objectId: true });
  }, [supplierId]);

  const { fetch, filters } = useTableRequest(ProductAnalyticService.storeDistributionSummary, filter);
  const query = useQuery([SUPPLIER_STORE_DISTRIBUTION_SUMMARY, supplierId, 'inventory-supplier'], fetch, {
    enabled: !!supplierId,
  });

  return {
    ...query,
    filters,
  };
};
