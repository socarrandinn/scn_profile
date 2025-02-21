import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { SUB_ORDER_STYLES } from 'modules/sales/common/constants/order-entities.style';
import { OrderStatusCell } from 'modules/sales/common/components/OrderStatusCell';
import { Stack } from '@mui/material';
import { DateValue } from '@dfl/mui-react-common';
import { PaidOrderHeaderActions } from 'modules/sales/paid-order/components/PaidOrderHeaderActions';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import { SUB_ORDER_ROUTE } from '../../constants/sub-order.route';
import { subOrderTabs } from '../../constants/sub-order.tabs';

const SubOrderHeaderDetails = () => {
  const { order, isLoading, error } = useOrderContext();
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
      entityStyle={SUB_ORDER_STYLES}
      icon={<SUB_ORDER_STYLES.ICON />}
    >
      <RouterTab
        tabs={subOrderTabs}
        prefix={`${SUB_ORDER_ROUTE.LIST}/${order?._id as string}`}
        translationNs={'Suborders'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(SubOrderHeaderDetails);
