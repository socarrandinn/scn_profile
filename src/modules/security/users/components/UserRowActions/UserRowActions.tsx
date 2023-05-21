import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { useParamsLink, useUser } from '@dfl/react-security';
import { useDeleteUser } from 'modules/security/users/hooks/useDeleteUser';
import { useNavigate } from 'react-router';

type UserStatusProps = {
  rowId: string;
};

const UserRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { user } = useUser();
  const { mutate, isLoading, error } = useDeleteUser(rowId, onClose);
  const navigate = useNavigate();
  const isMe = user?.id === rowId;

  const goTo = () => {
    navigate(`/security/users/${rowId}/general`);
  };

  return (
        <Stack direction='row' spacing={1}>
            <EditRowActions onClick={goTo}/>
            <DeleteRowAction
                disabled={isMe}
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                error={error}
                isLoading={isLoading}
                onDelete={mutate}
            />
        </Stack>
  );
};

export default memo(UserRowActions);
