import { useParseFilter, useTable, useTableSearch } from '@dfl/mui-admin-layout';
import { useMemo } from 'react';
import { FilterFactory } from '@dofleini/query-builder';

export const useAuditLogTableFilter = () => {
  const { filters } = useTable();
  const { query: search } = useTableSearch();
  const urlFilterObj = useParseFilter(filters);
  return useMemo(() => {
    const filters = FilterFactory.factory(urlFilterObj);
    if (Object.keys(filters).length === 0) return {};
    return { filters, search };
  }, [urlFilterObj]);
};
