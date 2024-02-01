import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useDeleteClients } from 'modules/crm/clients/hooks/useDeleteClients';
import { DeleteRowAction } from '@dfl/mui-admin-layout';

type UserStatusProps = {
  rowId: string;
};

// TODO: Change onDelete behavior to delete client recipients
const ClientRecipientsRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading, error } = useDeleteClients(rowId, onClose);

  return (
    <>
      <Stack direction='row' spacing={1}>
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

export default memo(ClientRecipientsRowActions);
