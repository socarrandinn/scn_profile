import { useParseFilter, useTable } from '@dfl/mui-admin-layout';
import { useMemo } from 'react';
import { FilterFactory } from '@dofleini/query-builder';

export const useDashboardFilter = () => {
  const { filters } = useTable();
  const urlFilterObj = useParseFilter(filters);
  return useMemo(() => {
    const filters = FilterFactory.factory(urlFilterObj);

    // "interval": "Daily | Monthly | Yearly",
    if (Object.keys(filters).length === 0) return {};
    return { filters };
  }, [urlFilterObj]);
}
