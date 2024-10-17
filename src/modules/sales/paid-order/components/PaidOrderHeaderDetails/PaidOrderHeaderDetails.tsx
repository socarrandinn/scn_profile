import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { usePaidOrderContext } from 'modules/sales/paid-order/contexts/PaidOrderContext';
import { PAID_ORDER_ROUTE } from '../../constants/paid-order.route';
import { paidOrderTabs } from '../../constants/paid-order.tabs';
import { PAID_ORDER_STYLES } from 'modules/sales/common/constants/order-entities.style';
import { PaidOrderHeaderActions } from '../PaidOrderHeaderActions';
import { OrderStatusCell } from 'modules/sales/common/components/OrderStatusCell';

const PaidOrderHeaderDetails = () => {
  const { order, isLoading, error } = usePaidOrderContext();
  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;
  if (!order) return <></>;

  return (
    <HeaderSummaryTabs
      title={order?.code || ''}
      subtitle={<OrderStatusCell value={order?.status} record={order} rowId={order?._id as string} />}
      actions={<PaidOrderHeaderActions />}
      entityStyle={PAID_ORDER_STYLES}
      icon={<PAID_ORDER_STYLES.ICON />}
    >
      <RouterTab
        tabs={paidOrderTabs}
        prefix={`${PAID_ORDER_ROUTE.LIST}/${order?._id as string}`}
        translationNs={'paidOrder'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(PaidOrderHeaderDetails);
