import { memo, useCallback } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useParamsLink } from '@dfl/react-security';
import { useDeleteCausesIncidence } from 'modules/sales/settings/causes-incidence/hooks/useDeleteCausesIncidence';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { CAUSE_INCIDENCE_ERRORS } from '../../constants/causes-incidence.errors';

type UserStatusProps = {
  rowId: string;
};

const CausesIncidenceRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });
  const { mutate, isLoading, error, reset } = useDeleteCausesIncidence(rowId, onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <>
      <Stack direction='row' spacing={1}>
        <EditRowActions onClick={handleEdit} />
        <DeleteRowAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={handleClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
          errors={CAUSE_INCIDENCE_ERRORS}
        />
      </Stack>
    </>
  );
};

export default memo(CausesIncidenceRowActions);
