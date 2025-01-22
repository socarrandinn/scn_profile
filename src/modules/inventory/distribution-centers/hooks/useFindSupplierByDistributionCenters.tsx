import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { SUPPLIERS_PROVIDER_SUPPLIER_LIST_KEY } from 'modules/inventory/warehouse/constants';
import { TermFilter } from '@dofleini/query-builder';
import { useMemo } from 'react';
import { SupplierService } from 'modules/inventory/provider/supplier/services';

export const useFindSupplierByDistributionCenters = (distributionCenterId: string) => {
  // todo no se define el filtro de los proveedores de productos
  const filters = useMemo(() => {
    return new TermFilter({ type: 'TERM', field: 'distributionCenters', value: distributionCenterId, objectId: true });
  }, [distributionCenterId]);

  const { fetch, queryKey } = useTableRequest(SupplierService.search, { filters });

  return useQuery([SUPPLIERS_PROVIDER_SUPPLIER_LIST_KEY, queryKey], fetch, { enabled: !!distributionCenterId });
};
