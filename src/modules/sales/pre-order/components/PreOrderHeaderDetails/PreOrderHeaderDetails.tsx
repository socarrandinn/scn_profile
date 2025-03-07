import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { PAID_ORDER_STYLES } from 'modules/sales/common/constants/order-entities.style';
import { OrderStatusCell } from 'modules/sales/common/components/OrderStatusCell';
import { Stack } from '@mui/material';
import { DateValue } from '@dfl/mui-react-common';
import { PRE_ORDER_ROUTE } from '../../constants/pre-order.route';
import { PaidOrderHeaderActions } from 'modules/sales/paid-order/components/PaidOrderHeaderActions';
import { preOrderTabs } from '../../constants/pre-order.tabs';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';

const PreOrderHeaderDetails = () => {
  const { order, isLoading, error } = useOrderContext();
  useBreadcrumbName(order?._id || '', order?.code, isLoading);
  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;
  if (!order) return <></>;

  return (
    <HeaderSummaryTabs
      title={order?.code || ''}
      subtitle={
        <Stack gap={1} flexDirection={{ md: 'row' }}>
          <DateValue value={order?.createdAt} format={'PPpp'} />
          <OrderStatusCell value={order?.status} record={order} rowId={order?._id as string} />
        </Stack>
      }
      actions={<PaidOrderHeaderActions />}
      entityStyle={PAID_ORDER_STYLES}
      icon={<PAID_ORDER_STYLES.ICON />}
    >
      <RouterTab
        tabs={preOrderTabs}
        prefix={`${PRE_ORDER_ROUTE.LIST}/${order?._id as string}`}
        translationNs={'preOrders'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(PreOrderHeaderDetails);
