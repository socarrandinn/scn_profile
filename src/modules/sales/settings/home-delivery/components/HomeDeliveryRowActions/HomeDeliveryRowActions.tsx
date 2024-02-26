import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useParamsLink } from '@dfl/react-security';
import { useDeleteHomeDelivery } from 'modules/sales/settings/home-delivery/hooks/useDeleteHomeDelivery';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';

type UserStatusProps = {
  rowId: string;
};

const HomeDeliveryRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });
  const { mutate, isLoading, error } = useDeleteHomeDelivery(rowId, onClose);
  return (
    <>
      <Stack direction='row' spacing={1}>
        <EditRowActions onClick={handleEdit} />
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

export default memo(HomeDeliveryRowActions);
