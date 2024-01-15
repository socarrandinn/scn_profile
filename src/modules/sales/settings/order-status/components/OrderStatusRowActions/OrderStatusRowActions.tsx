import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useParamsLink } from '@dfl/react-security';
import { useDeleteOrderStatus } from 'modules/sales/settings/order-status/hooks/useDeleteOrderStatus';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { EditOrderActions } from '../EditOrderActions';
import useUpdateOrder from '../../hooks/useUpdateOrder';

type UserStatusProps = {
  rowId?: string;
  allowDeleteAction?: boolean;
  index: number;
  order: number;
};

const OrderStatusRowActions = ({ rowId, allowDeleteAction = true, index, order }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });

  const { updateIsLoading, updateOrder } = useUpdateOrder(rowId as string)

  const { mutate, isLoading, error } = useDeleteOrderStatus(rowId as string, onClose);

  return (
    <>
      <Stack direction='row' spacing={1} justifyContent='end'>
        <EditOrderActions index={index}
                          onDownAction={() => { updateOrder(order + 1); }}
                          onUpAction={() => { order > 0 && updateOrder(order - 1) }}
                          isLoading={updateIsLoading}/>
        <EditRowActions onClick={handleEdit} />
        {allowDeleteAction ? (
          <DeleteRowAction
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            error={error}
            isLoading={isLoading}
            onDelete={mutate}
          />
        ) : (
          <></>
        )}
      </Stack>
    </>
  );
};

export default memo(OrderStatusRowActions);
