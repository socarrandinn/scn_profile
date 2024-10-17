import { memo } from 'react';
import { usePaidOrderContext } from '../../contexts/PaidOrderContext';
import { Box } from '@mui/material';
import { OrderStatusCell } from 'modules/sales/common/components/OrderStatusCell';
import { PermissionCheck } from '@dfl/react-security';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';

const PaidOrderHeaderActions = () => {
  const { order } = usePaidOrderContext();
  if (!order) return <></>;
  return (
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <PermissionCheck permissions={[ORDER_PERMISSIONS.ORDER_STATUS_WRITE]}>
        <OrderStatusCell value={order?.status} record={order} rowId={order?._id as string} />
      </PermissionCheck>
    </Box>
  );
};

export default memo(PaidOrderHeaderActions);
