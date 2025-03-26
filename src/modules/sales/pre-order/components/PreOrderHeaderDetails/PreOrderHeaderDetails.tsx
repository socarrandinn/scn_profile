import { memo } from 'react';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import { OrderStatusCell } from 'modules/sales/common/components/OrderStatusCell';
import { Stack } from '@mui/material';
import { DateValue } from '@dfl/mui-react-common';
import OrderHeader from 'modules/sales/common/components/OrderHeader/OrderHeader';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { PRE_ORDER_ROUTE } from '../../constants/pre-order.route';
import { preOrderTabs } from '../../constants/pre-order.tabs';
import { PaidOrderHeaderActions } from 'modules/sales/paid-order/components/PaidOrderHeaderActions';

const PreOrderHeaderDetails = () => {
  const { order, isLoading, error } = useOrderContext();
  useBreadcrumbName(order?._id || '', order?.code, isLoading);

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
        actions={<PaidOrderHeaderActions incidenceMenu={false} />}
      >
        <RouterTab
          tabs={preOrderTabs}
          prefix={`${PRE_ORDER_ROUTE.LIST}/${order?._id as string}`}
          translationNs={'preOrder'}
          variant='scrollable'
          scrollButtons='auto'
          allowScrollButtonsMobile
        />
      </OrderHeader>
    </>
  );
};

export default memo(PreOrderHeaderDetails);
