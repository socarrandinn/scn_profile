import { useMemo } from 'react';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_WAREHOUSE_LIST_KEY } from 'modules/inventory/product/constants/query-keys';
import { useParams } from 'react-router';
import { useProviderWarehouseContext } from 'modules/inventory/provider/supplier/context/WarehouseProvider';

export const useFindProductBySupplierAndStore = () => {
  const { id: providerId } = useParams();
  const { warehouseId } = useProviderWarehouseContext();

  const filter = useMemo(() => {
    return new OperatorFilter({
      type: 'AND',
      filters: [
        new TermFilter({ field: 'stock.warehouse', value: warehouseId, objectId: true }),
        new TermFilter({ field: 'providers.supplier._id', value: providerId, objectId: true }),
      ],
    });
  }, [providerId, warehouseId]);

  const { fetch, queryKey, filters } = useTableRequest(ProductService.search, filter);
  const query = useQuery([PRODUCTS_WAREHOUSE_LIST_KEY, queryKey], fetch, {
    enabled: !!warehouseId,
  });

  return {
    ...query,
    filters,
  };
};
