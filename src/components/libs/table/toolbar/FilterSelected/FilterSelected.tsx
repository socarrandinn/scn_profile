import { memo, useEffect, useMemo } from 'react';
import { useFilterStore } from './context/filtersStore';
import { useTable } from '@dfl/mui-admin-layout';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import { FilterListProps } from '../FilterList/FilterList';
import { FilterItem } from '../FilterItem';

const FilterSelected = ({ children, flexGrow, hideFilters }: ChildrenProps & FilterListProps) => {
  const { filters: originalFilters } = useTable();
  const _filters = useFilterStore((state) => state.filters);
  const excludeFilterKey = useFilterStore((state) => state.excludeFiltersKey);
  const setFilter = useFilterStore((state) => state.setFilter);

  const filterView = useMemo(
    () => _filters?.filter((f) => !excludeFilterKey.includes(f.key)),
    [_filters, excludeFilterKey],
  );

  useEffect(() => {
    if (originalFilters) {
      setFilter(originalFilters);
    }
  }, [originalFilters, setFilter]);

  return (
    <FlexBox gap={1} flexWrap={'wrap'} flexGrow={flexGrow}>
      {children}
      {!hideFilters && filterView?.map((filter) => <FilterItem key={filter.key} filter={filter} />)}
    </FlexBox>
  );
};

export default memo(FilterSelected);
