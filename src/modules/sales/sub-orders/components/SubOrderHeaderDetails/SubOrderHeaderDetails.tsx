import { memo } from 'react';
import { ReactLink, RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { OrderStatusCell } from 'modules/sales/common/components/OrderStatusCell';
import { Stack, Typography } from '@mui/material';
import { DateValue } from '@dfl/mui-react-common';
import { PaidOrderHeaderActions } from 'modules/sales/paid-order/components/PaidOrderHeaderActions';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import { SUB_ORDER_ROUTE } from '../../constants/sub-order.route';
import { subOrderTabs } from '../../constants/sub-order.tabs';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import OrderHeader from 'modules/sales/common/components/OrderHeader/OrderHeader';
import { PAID_ORDER_ROUTE } from 'modules/sales/paid-order/constants/paid-order.route';

const SubOrderHeaderDetails = () => {
  const { order, isLoading, error } = useOrderContext();
  useBreadcrumbName(order?._id || '', order?.code, isLoading);

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;
  if (!order) return <></>;

  return (
    <>
      <OrderHeader
        title={
          <Stack flexDirection={'row'} gap={1}>
            <ReactLink
              underline='hover'
              variant='h1'
              fontWeight={'bold'}
              to={`${PAID_ORDER_ROUTE.DETAIL(order?.order?._id as string)}`}
            >
              {order?.order?.code}
            </ReactLink>
            <Typography variant='h1'>{`/ ${order?.code}`}</Typography>
          </Stack>
        }
        status={<OrderStatusCell value={order?.status} record={order} rowId={order?._id as string} />}
        subtitle={
          <Stack gap={1} flexDirection={{ md: 'row' }}>
            <DateValue value={order?.createdAt} format={'PPpp'} />
          </Stack>
        }
        actions={<PaidOrderHeaderActions />}
      >
        <RouterTab
          tabs={subOrderTabs}
          prefix={`${SUB_ORDER_ROUTE.LIST}/${order?._id as string}`}
          translationNs={'Suborders'}
          variant='scrollable'
          scrollButtons='auto'
          allowScrollButtonsMobile
        />
      </OrderHeader>
    </>
  );
};

export default memo(SubOrderHeaderDetails);
