import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { useNavigate } from 'react-router';
import { useDeleteSupplierUser } from 'modules/inventory/provider/supplier/hooks/useDeleteSupplierUser';

type SupplierUserRowActionsProps = {
  rowId: string;
};

const SupplierUserRowActions = ({ rowId }: SupplierUserRowActionsProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading, error } = useDeleteSupplierUser(rowId, onClose);
  const navigate = useNavigate();

  const goTo = () => {
    navigate(`/security/users/user/${rowId}/general`);
  };

  return (
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
  );
};

export default memo(SupplierUserRowActions);
