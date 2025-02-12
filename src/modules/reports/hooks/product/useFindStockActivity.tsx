import { useTableRequest } from '@dfl/mui-admin-layout';
import { TermFilter } from '@dofleini/query-builder';
import { useQuery } from '@tanstack/react-query';
import { REPORT_PRODUCT_STOCK_ACTIVITY } from 'modules/reports/constants/query-keys';
import { ReportProductActivityService } from 'modules/reports/services';
import { useMemo } from 'react';

export const useFindStockActivity = (productId?: string) => {
  const filters = useMemo(() => new TermFilter({ field: 'item', value: productId, objectId: true }), [productId]);

  const { fetch, queryKey } = useTableRequest(
    (params, config) => ReportProductActivityService.searchStockActivity(productId as string, params, config),
    filters,
  );

  return useQuery([REPORT_PRODUCT_STOCK_ACTIVITY, queryKey], fetch, { enabled: !!productId });
};
