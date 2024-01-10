import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useParamsLink } from '@dfl/react-security';
import { useDeleteOrderStatus } from 'modules/order-status/hooks/useDeleteOrderStatus';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';

type UserStatusProps = {
  rowId?: string;
  allowDeleteAction?: boolean;
};

const OrderStatusRowActions = ({ rowId, allowDeleteAction = true }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });
  const { mutate, isLoading, error } = useDeleteOrderStatus(rowId as string, onClose);
  return (
    <>
      <Stack direction='row' spacing={1}>
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
