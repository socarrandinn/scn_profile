import { TableProvider, FilterViewProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import { SUB_ORDER_VIEWS } from 'modules/sales/common/constants/order-tabs-view.constants';
import { subOrderFilters } from 'modules/sales/sub-orders/constants/sub-order.filters';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import DispatchSubOrderListContainer from '../../containers/DispatchSubOrderListContainer';

const DispatchSubOrders = () => {
  const { t } = useTranslation('subOrder');
  return (
    <PagePaperLayout title={t('list')} mb={3}>
      <TableProvider id={'dispatch-sub-orders'} filters={subOrderFilters}>
        <FilterViewProvider views={SUB_ORDER_VIEWS} defaultView={'all'}>
          <DispatchSubOrderListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(DispatchSubOrders);
