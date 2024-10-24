import { Filter } from '@dfl/mui-admin-layout';

export const getDefaultFilterKeys = (filters: Filter[], slice?: number) => {
  if (filters) {
    return filters.slice(0, slice || filters.length).map((f: Filter) => f.key);
  }
  return undefined;
};
