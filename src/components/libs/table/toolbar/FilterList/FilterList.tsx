import { memo } from 'react';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import { useTable } from '@dfl/mui-admin-layout';
import { FilterItem } from '../FilterItem';
import { FilterSelected } from '../FilterSelected';

const gap = { xs: 1, md: 2 };

export type FilterListProps = {
  flexGrow?: number;
  hideFilters?: boolean;
  hasSelected?: boolean;
};

const FilterList = ({ children, flexGrow, hideFilters, hasSelected }: ChildrenProps & FilterListProps) => {
  const { filters } = useTable();

  if (!filters) return <>{children}</>;

  if (hasSelected) {
    return <FilterSelected>{children}</FilterSelected>;
  }

  return (
    <FlexBox gap={gap} flexWrap={'wrap'} flexGrow={flexGrow}>
      {children}
      {!hideFilters && filters.map((filter) => <FilterItem key={filter.key} filter={filter} />)}
    </FlexBox>
  );
};

export default memo(FilterList);
