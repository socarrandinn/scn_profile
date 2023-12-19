import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import OrderStatusListContainer from 'modules/order-status/containers/OrderStatusListContainer';
import { orderStatusFilters } from 'modules/order-status/constants/order-status.filters';

const OrderStatusList = () => {
  const { t } = useTranslation('orderStatus');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'orderStatuses'} filters={orderStatusFilters}>
        <OrderStatusListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(OrderStatusList);
