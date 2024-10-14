import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useDeleteStore } from 'modules/inventory/warehouse/hooks/useDeleteStore';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { useNavigate } from 'react-router';

type UserStatusProps = {
  rowId: string;
};

const StoreRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const navigate = useNavigate();
  const { mutate, isLoading, error } = useDeleteStore(rowId, onClose);
  const goTo = () => {
    navigate(`/inventory/warehouses/${rowId}/general/?edit=true`,);
  };
  return (
    <>
      <Stack direction='row' spacing={1}>
        <EditRowActions onClick={goTo} />
        <DeleteRowAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
        />
      </Stack>
    </>
  );
};

export default memo(StoreRowActions);
