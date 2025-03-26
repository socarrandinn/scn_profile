import { memo } from 'react';
import { Box } from '@mui/material';
import { PermissionCheck } from '@dfl/react-security';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { OrderCompleteButton } from 'modules/sales/common/components/OrderCompleteButton';
import OrderExportMenu from './actions/OrderExportMenu';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import IncidenceMenu from 'modules/sales/incidence/components/IncidenceMenu/IncidenceMenu';
import { ORDER_REFERENCE_TYPE } from 'modules/sales/common/constants/order.enum';

type Props = {
  incidenceMenu?: boolean;
  type?: ORDER_REFERENCE_TYPE;
};

const PaidOrderHeaderActions = ({ incidenceMenu = true, type }: Props) => {
  const { order, orderId } = useOrderContext();
  if (!order) return <></>;
  return (
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <PermissionCheck permissions={[ORDER_PERMISSIONS.ORDER_STATUS_WRITE]}>
        <OrderCompleteButton orderId={orderId} status={order?.status} isActionButton code={order?.code} />
        <OrderExportMenu hazExportTicket order={order} />
        {incidenceMenu && <IncidenceMenu type={type as ORDER_REFERENCE_TYPE} />}
      </PermissionCheck>
    </Box>
  );
};

export default memo(PaidOrderHeaderActions);
