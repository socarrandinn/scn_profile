import { memo, useEffect, useMemo } from 'react';
import { useFilterStore } from './context/filtersStore';
import { useTable } from '@dfl/mui-admin-layout';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import { FilterListProps } from '../FilterList/FilterList';
import { FilterItem } from '../FilterItem';

const FilterSelected = ({ children, flexGrow, hideFilters, defaultFilterKeys }: ChildrenProps & FilterListProps) => {
  const { filters: originalFilters, id } = useTable();
  const _filters = useFilterStore((state) => state.filters);
  const excludeFiltersMap = useFilterStore((state) => state.excludeFiltersMap);
  const setFilter = useFilterStore((state) => state.setFilter);

  const filterView = useMemo(() => {
    const excludedKeys = excludeFiltersMap[id] || [];
    return _filters?.filter((f) => !excludedKeys.includes(f.key)) || [];
  }, [_filters, excludeFiltersMap, id]);

  useEffect(() => {
    if (originalFilters) {
      setFilter(originalFilters, id, defaultFilterKeys);
    }
  }, [originalFilters, setFilter, id, defaultFilterKeys]);

  return (
    <FlexBox gap={1} flexWrap={'wrap'} flexGrow={flexGrow}>
      {children}
      {!hideFilters && filterView?.map((filter) => <FilterItem key={filter.key} filter={filter} />)}
    </FlexBox>
  );
};

export default memo(FilterSelected);
