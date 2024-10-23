import { memo } from 'react';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import { useTable } from '@dfl/mui-admin-layout';
import { FilterItem } from '../FilterItem';
import { FilterSelected } from '../FilterSelected';

const gap = { xs: 1, md: 2 };

export type FilterListProps = {
  flexGrow?: number;
  hideFilters?: boolean;
  hasActiveMenu?: boolean;
  defaultFilterKeys?: string[];
};

const FilterList = ({ children, flexGrow, hideFilters, hasActiveMenu, defaultFilterKeys }: ChildrenProps & FilterListProps) => {
  const { filters } = useTable();

  if (!filters) return <>{children}</>;

  if (hasActiveMenu) {
    return <FilterSelected defaultFilterKeys={defaultFilterKeys}>{children}</FilterSelected>;
  }

  return (
    <FlexBox gap={gap} flexWrap={'wrap'} flexGrow={flexGrow}>
      {children}
      {!hideFilters && filters.map((filter) => <FilterItem key={filter.key} filter={filter} />)}
    </FlexBox>
  );
};

export default memo(FilterList);
