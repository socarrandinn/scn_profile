import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useDeleteUsersInvite } from 'modules/security/users-invite/hooks/useDeleteUsersInvite';
import { DeleteRowAction } from '@dfl/mui-admin-layout';

type UserStatusProps = {
  rowId: string;
};

const UsersInviteRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  /*  const handleEdit = useParamsLink({ edit: rowId }); */
  const { mutate, isLoading, error } = useDeleteUsersInvite(rowId, onClose);
  return (
    <>
      <Stack direction='row' spacing={1}>
        {/*  <EditRowActions onClick={handleEdit} /> */}
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

export default memo(UsersInviteRowActions);
