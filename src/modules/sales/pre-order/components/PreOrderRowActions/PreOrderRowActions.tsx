import { memo } from 'react';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';

type UserStatusProps = {
  rowId: string;
  record: IOrder;
};

const PreOrderRowActions = ({ rowId: orderId, record }: UserStatusProps) => {
  return (
    <>
      {/*  // todo definir la acción Completar orden
      <Stack direction='row' spacing={1}>
        <OrderCompleteButton orderId={orderId} status={record?.status} code={record?.code} />
      </Stack> */}
    </>
  );
};

export default memo(PreOrderRowActions);
