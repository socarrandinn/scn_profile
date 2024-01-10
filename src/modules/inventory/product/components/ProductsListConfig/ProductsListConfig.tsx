import { memo } from 'react';
import { Filter, FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { CategoriesDataProvider } from 'modules/inventory/settings/category/context/CategoriesAllContext';
import { PRODUCT_VIEWS } from '../../constants/product-tabs-view.constants';
import { ChildrenProps } from '@dfl/mui-react-common';

type Props = ChildrenProps & {
  filters: Filter[] | undefined;
  id?: string;
};
const ProductsListConfig = ({ filters, id = 'products', children }: Props) => {
  return (
    <CategoriesDataProvider>
      <TableProvider id={id} filters={filters}>
        <FilterViewProvider views={PRODUCT_VIEWS} defaultView={'all'}>
          {children}
        </FilterViewProvider>
      </TableProvider>
    </CategoriesDataProvider>
  );
};

export default memo(ProductsListConfig);
