import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import { TransTypography } from 'components/TransTypography';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { OrderShippingTypeCell } from '../../OrderShippingTypeCell';
import { PermissionCheck, ReactLink } from '@dfl/react-security';
import ProductTable from './ProductTable';
import { useCheckOrderStatus } from 'modules/sales/common/hooks/useCheckOrderStatus';
import { SUB_ORDER_ROUTE } from 'modules/sales/sub-orders/constants/sub-order.route';
import { useMemo } from 'react';
import { OrderStatusCell } from '../../OrderStatusCell';
import OrderExportMenu from 'modules/sales/paid-order/components/PaidOrderHeaderActions/actions/OrderExportMenu';
import { OrderCompleteButton } from '../../OrderCompleteButton';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import OrderDistributionCenter from '../OrderDistributionCenter/OrderDistributionCenter';
import { ORDER_TYPE_ENUM } from 'modules/sales/common/constants/order.enum';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';

const Content = styled(Stack)(() => ({ gap: 16, mb: 3 }));
type Props = Pick<IOrder, 'suborders'>;

const SubOrderDetail = ({ suborders }: Props) => {
  return (
    <Content>
      {suborders?.map((suborder) => (
        <SubOrder key={suborder?._id} suborder={suborder} />
      ))}
    </Content>
  );
};

export default SubOrderDetail;

type SubOrderProps = {
  suborder: IOrder;
};
const SubOrder = ({ suborder }: SubOrderProps) => {
  const { isValidated } = useCheckOrderStatus(suborder?.status?.type);
  const { orderType } = useOrderContext();
  const isSubOrder = useMemo(() => orderType === ORDER_TYPE_ENUM.SUB_ORDER, [orderType]);

  return (
    <Stack
      sx={{
        gap: 3,
      }}
    >
      <Stack
        sx={{
          gap: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <SuborderCode order={suborder} isValidated={isValidated} isSubOrder={isSubOrder} />
          <OrderShippingTypeCell fontWeight={600} value={suborder?.shipping?.shippingType} />
          <TransTypography
            message='subOrder:details.shippingPackage.weight'
            values={{ weight: suborder?.shippingPackage?.weight }}
          />
        </Box>

        {/* order distribution center */}
        {!isSubOrder && <OrderDistributionCenter distributionCenter={suborder?.distributionCenter} showLogistic/>}
      </Stack>

      {/* order status */}
      {!isSubOrder && <ValidateHeader order={suborder} isValidated={isValidated} />}

      {/* product items */}
      <ProductTable items={suborder?.items} invoice={suborder?.invoice} />
    </Stack>
  );
};

export const SuborderCode = ({
  order,
  isValidated,
  isSubOrder,
}: {
  order: IOrder;
  isValidated: boolean;
  isSubOrder: boolean;
}) => {
  const code = useMemo(() => {
    if (isValidated) {
      /* only by suborder */
      if (isSubOrder) return null;

      /* only by validate order */
      return (
        <ReactLink fontWeight={'bold'} to={`${SUB_ORDER_ROUTE.DETAIL(order?._id as string)}`}>
          {order?.code}
        </ReactLink>
      );
    }

    return <Typography>{order?.code}</Typography>;
  }, [isSubOrder, isValidated, order?._id, order?.code]);
  return (
    <Stack gap={0.5} flexDirection={'row'}>
      {!isSubOrder && <TransTypography fontWeight={'bold'} message='subOrder:name' />}
      {code}
    </Stack>
  );
};

export const ValidateHeader = ({ order, isValidated }: { order: IOrder; isValidated: boolean }) => {
  if (!isValidated) {
    return <TransTypography mb={2} color={'text.secondary'} message='order:waitingForValidate' />;
  }

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <OrderStatusCell value={order?.status} rowId={order._id as string} record={order} />
      {order?._id && (
        <PermissionCheck permissions={[ORDER_PERMISSIONS.ORDER_STATUS_WRITE]}>
          <Stack gap={1} flexDirection={'row'} flexWrap={'wrap'}>
            <OrderCompleteButton orderId={order?._id} status={order?.status} isActionButton code={order?.code} />
            <OrderExportMenu hazExportTicket order={order} />
          </Stack>
        </PermissionCheck>
      )}
    </Stack>
  );
};
