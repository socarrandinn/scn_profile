import { memo } from 'react';
import { Stack } from '@mui/material';
import { useParamsLink } from '@dfl/react-security';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { useToggle } from '@dfl/hook-utils';
import { useDeleteIncidence } from '../../hooks/useDeleteIncidence';
import { IIncidence } from '../../interfaces';

type UserStatusProps = {
  rowId: string;
  incidence: IIncidence;
};

const IncidenceRowActions = ({ rowId, incidence }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });
  const { mutate, isLoading, error } = useDeleteIncidence(rowId, onClose);

  return (
    <>
      <Stack direction='row' spacing={1}>
        <EditRowActions onClick={handleEdit} />
        <DeleteRowAction
          disabled={incidence?.actions && incidence?.actions?.length > 0}
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

export default memo(IncidenceRowActions);
