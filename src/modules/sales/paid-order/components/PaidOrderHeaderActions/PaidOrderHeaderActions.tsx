import { memo, useMemo } from 'react';
import { Box } from '@mui/material';
import { PermissionCheck } from '@dfl/react-security';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { PAYMENT_GATEWAYS_ENUM } from 'modules/sales/common/constants/order-payments';
import OrderDownloadEvidence from './actions/OrderDownloadEvidence';
import OrderDownloadAccept from './actions/OrderDownloadAccept';
import { OrderCompleteButton } from 'modules/sales/common/components/OrderCompleteButton';
import OrderExportMenu from './actions/OrderExportMenu';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';

const PaidOrderHeaderActions = () => {
  const { order, orderId } = useOrderContext();
  const payment = useMemo(() => order?.billing?.gateway, [order?.billing?.gateway]);
  if (!order) return <></>;
  return (
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <PermissionCheck permissions={[ORDER_PERMISSIONS.ORDER_STATUS_WRITE]}>
        {orderId && payment && payment === PAYMENT_GATEWAYS_ENUM.CCASH_TRANSFER && (
          <>
            <OrderDownloadEvidence orderId={orderId} />
            <OrderDownloadAccept orderId={orderId} />
          </>
        )}
        <OrderCompleteButton orderId={orderId} status={order?.status} isActionButton code={order?.code} />
        <OrderExportMenu hazExportTicket/>
      </PermissionCheck>
    </Box>
  );
};

export default memo(PaidOrderHeaderActions);
