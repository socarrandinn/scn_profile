import { memo } from 'react';
import { Stack } from '@mui/material';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { OrderCompleteButton } from 'modules/sales/common/components/OrderCompleteButton';

type UserStatusProps = {
  rowId: string;
  record: IOrder
};

const PaidOrderRowActions = ({ rowId: orderId, record }: UserStatusProps) => {
  return (
    <>
      <Stack direction='row' spacing={1}>
        <OrderCompleteButton orderId={orderId} status={record?.status} code={record?.code} />
      </Stack>
    </>
  );
};

export default memo(PaidOrderRowActions);
