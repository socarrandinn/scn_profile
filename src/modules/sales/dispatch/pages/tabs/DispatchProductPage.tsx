import { TableProvider } from '@dfl/mui-admin-layout';
import { memo } from 'react';
import DispatchProductListContainer from '../../containers/DispatchProductListContainer';
import { productFilters } from 'modules/inventory/product/constants';

const DispatchProductPage = () => {
  return (
    <TableProvider id={'dispatch-products'} filters={productFilters}>
      <DispatchProductListContainer />
    </TableProvider>
  );
};

export default memo(DispatchProductPage);
