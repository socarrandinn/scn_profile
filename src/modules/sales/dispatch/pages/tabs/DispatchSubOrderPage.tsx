import { TableProvider } from '@dfl/mui-admin-layout';
import { subOrderFilters } from 'modules/sales/sub-orders/constants/sub-order.filters';
import { memo, useMemo } from 'react';
import DispatchSubOrderListContainer from '../../containers/DispatchSubOrderListContainer';

const DispatchSubOrderPage = () => {
  const filters = useMemo(() => subOrderFilters?.filter((filter) => !filter?.field.match(/dispatch/)), []);

  return (
    <TableProvider id={'dispatch-sub-orders'} filters={filters}>
      <DispatchSubOrderListContainer />
    </TableProvider>
  );
};

export default memo(DispatchSubOrderPage);
