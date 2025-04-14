import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { warehouseFilters } from 'modules/inventory/warehouse/constants';
import DispatchWarehouseListContainer from '../../containers/DispatchWarehouseListContainer';

const DispatchWarehousePage = () => {
  return (
    <TableProvider id={'dispatch-warehouse'} filters={warehouseFilters}>
      <DispatchWarehouseListContainer />
    </TableProvider>
  );
};

export default memo(DispatchWarehousePage);
