import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';

import { useDeleteEmployee } from 'modules/rrhh/employee/management/hooks/useDeleteEmployee';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { useNavigate } from 'react-router';
import { useTimeOffChangeStatus } from 'modules/rrhh/time-off/hooks/useTimeOffChangeStatus';

type Props = {
  rowId: string;
};

const EmployeeRowActions = ({ rowId }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle();

  const { mutate, isLoading, error } = useTimeOffChangeStatus(rowId, onClose);

  const handleAccept = () => {};

  const handleReject = () => {};
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
