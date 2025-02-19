import { useTableRequest } from '@dfl/mui-admin-layout';
import { useGetQueryObj } from '@dfl/react-security';
import { InFilter, OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { useQuery } from '@tanstack/react-query';
import { isArray } from 'lodash';
import { REPORT_PRODUCT_STOCK_ACTIVITY } from 'modules/reports/constants/query-keys';
import { useHeaderFilterContext } from 'modules/reports/contexts/HeaderFilterContext';
import { ProductStockActivityService } from 'modules/reports/services';
import { useMemo } from 'react';

export const useFindStockActivity = (productId?: string) => {
  const { interval } = useHeaderFilterContext();
  const { warehouse } = useGetQueryObj();

  const filters = useMemo(() => {
    const warehouseFilter = new InFilter({
      field: 'warehouse',
      objectId: true,
      value: isArray(warehouse) ? warehouse : [warehouse],
      type: 'IN',
    });

    if (warehouse) {
      return new OperatorFilter({
        type: 'AND',
        filters: [new TermFilter({ field: 'item', value: productId, objectId: true }), warehouseFilter],
      });
    }
    return new TermFilter({ field: 'item', value: productId, objectId: true });
  }, [productId, warehouse]);

  const { fetch, queryKey } = useTableRequest(
    (params, config) => ProductStockActivityService.searchStockActivity(productId as string, params, config),
    filters,
  );

  return useQuery([REPORT_PRODUCT_STOCK_ACTIVITY, queryKey, interval, warehouse], fetch, {
    enabled: !!productId && !!interval,
  });
};
