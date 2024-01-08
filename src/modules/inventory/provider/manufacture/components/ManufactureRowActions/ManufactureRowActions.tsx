import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useParamsLink } from '@dfl/react-security';
import { useDeleteManufacture } from 'modules/inventory/provider/manufacture/hooks/useDeleteManufacture';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';

type ManufactureRowActionsProps = {
  rowId: string;
};

const ManufactureRowActions = ({ rowId }: ManufactureRowActionsProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });
  const { mutate, isLoading, error } = useDeleteManufacture(rowId, onClose);
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

export default memo(ManufactureRowActions);
