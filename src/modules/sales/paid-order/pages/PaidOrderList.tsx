import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import PaidOrderListContainer from 'modules/sales/paid-order/containers/PaidOrderListContainer';
import { paidOrderFilters } from '../constants';
import { SUB_ORDER_VIEWS } from 'modules/sales/common/constants/order-tabs-view.constants';

const PaidOrderList = () => {
  const { t } = useTranslation('paidOrder');

  return (
    <PagePaperLayout title={t('list')} mb={3}>
      <TableProvider id={'paid-orders'} filters={paidOrderFilters}>
        <FilterViewProvider views={SUB_ORDER_VIEWS} defaultView={'all'}>
          <PaidOrderListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(PaidOrderList);
