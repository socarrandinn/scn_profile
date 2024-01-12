import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import OrderStatusListContainer from 'modules/orders/settings/order-status/containers/OrderStatusListContainer';
import { orderStatusFilters } from 'modules/orders/settings/order-status/constants/order-status.filters';
import OrderStatusStepperContainer from '../containers/OrderStatusStepperContainer';

const OrderStatusList = () => {
  const { t } = useTranslation('orderStatus');

  return (
    <>
    <OrderStatusStepperContainer/>
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'orderStatuses'} filters={orderStatusFilters}>
        <OrderStatusListContainer />
      </TableProvider>
    </PagePaperLayout>
    </>
  );
};

export default memo(OrderStatusList);
