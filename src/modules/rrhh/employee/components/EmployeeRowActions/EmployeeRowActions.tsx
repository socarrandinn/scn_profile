import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';

import { useDeleteEmployee } from 'modules/rrhh/employee/hooks/useDeleteEmployee';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { useNavigate } from 'react-router';

type UserStatusProps = {
  rowId: string;
};

const EmployeeRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const navigate = useNavigate();

  const { mutate, isLoading, error } = useDeleteEmployee(rowId, onClose);
  const goTo = () => {
    navigate(`/rrhh/employees/${rowId}/general`);
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

export default memo(EmployeeRowActions);
