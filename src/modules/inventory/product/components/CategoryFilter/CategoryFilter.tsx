import { memo } from 'react';
import { FilterProps, FixedListFilter } from '@dfl/mui-admin-layout';
import { useCategoriesData } from 'modules/inventory/settings/category/context/CategoriesAllContext';

const CategoryFilter = ({ filter, ...props }: FilterProps) => {
  const { data } = useCategoriesData();

  return (
    <FixedListFilter
      {...props}
      filter={filter}
      options={data?.map((value) => ({
        value: value._id,
        label: value.name,
      }))}
    />
  );
};

export default memo(CategoryFilter);
