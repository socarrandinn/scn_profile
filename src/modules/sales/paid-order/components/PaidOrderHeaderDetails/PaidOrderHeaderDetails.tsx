import { memo } from 'react';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import { PAID_ORDER_ROUTE } from '../../constants/paid-order.route';
import { paidOrderTabs } from '../../constants/paid-order.tabs';
import { PaidOrderHeaderActions } from '../PaidOrderHeaderActions';
import { OrderStatusCell } from 'modules/sales/common/components/OrderStatusCell';
import { Stack } from '@mui/material';
import { DateValue } from '@dfl/mui-react-common';
import OrderHeader from 'modules/sales/common/components/OrderHeader/OrderHeader';

const PaidOrderHeaderDetails = () => {
  const { order, isLoading, error } = useOrderContext();
  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;
  if (!order) return <></>;

  return (
    <>
      <OrderHeader
        title={order?.code || ''}
        status={<OrderStatusCell value={order?.status} record={order} rowId={order?._id as string} />}
        subtitle={
          <Stack gap={1} flexDirection={{ md: 'row' }}>
            <DateValue value={order?.createdAt} format={'PPpp'} />
          </Stack>
        }
        actions={<PaidOrderHeaderActions />}
      >
        <RouterTab
          tabs={paidOrderTabs}
          prefix={`${PAID_ORDER_ROUTE.LIST}/${order?._id as string}`}
          translationNs={'paidOrder'}
          variant='scrollable'
          scrollButtons='auto'
          allowScrollButtonsMobile
        />
      </OrderHeader>
    </>
  );
};

export default memo(PaidOrderHeaderDetails);
