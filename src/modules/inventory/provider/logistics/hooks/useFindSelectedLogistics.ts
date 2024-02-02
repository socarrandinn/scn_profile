import { useQuery } from '@tanstack/react-query';
import { useTable, useTableRequest } from '@dfl/mui-admin-layout';
import { LogisticsService } from 'modules/inventory/provider/logistics/services';
import { LOGISTICS_LIST_KEY } from 'modules/inventory/provider/logistics/constants';
import { InFilter } from '@dofleini/query-builder';
import { useMemo } from 'react';

export const useFindSelectedLogistics = () => {
  const { selected } = useTable();

  const filters = useMemo(() => new InFilter({ field: '_id', value: selected, objectId: true }), [selected]);

  const { fetch, queryKey } = useTableRequest(LogisticsService.search, filters);

  return { ...useQuery([LOGISTICS_LIST_KEY, queryKey], fetch) };
};
