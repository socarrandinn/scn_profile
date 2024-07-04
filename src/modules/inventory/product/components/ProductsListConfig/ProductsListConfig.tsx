import { memo } from 'react';
import { Filter, FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { CategoriesDataProvider } from 'modules/inventory/settings/category/context/CategoriesAllContext';
import { ChildrenProps } from '@dfl/mui-react-common';
import { productTabs } from '../../constants';

type Props = ChildrenProps & {
  filters: Filter[] | undefined;
  id?: string;
};
const ProductsListConfig = ({ filters, id = 'products', children }: Props) => {
  return (
    <CategoriesDataProvider>
      <TableProvider id={id} filters={filters}>
        <FilterViewProvider views={productTabs} defaultView={'all'}>
          {children}
        </FilterViewProvider>
      </TableProvider>
    </CategoriesDataProvider>
  );
};

export default memo(ProductsListConfig);
