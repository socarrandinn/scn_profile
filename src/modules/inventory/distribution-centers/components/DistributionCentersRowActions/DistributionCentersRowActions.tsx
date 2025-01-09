import { memo, useCallback } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useDeleteDistributionCenters } from 'modules/inventory/distribution-centers/hooks/useDeleteDistributionCenters';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { useNavigate } from 'react-router';
import { DELETE_DISTRIBUTION_CENTER_ERRORS } from '../../constants';

type UserStatusProps = {
  rowId: string;
};

const DistributionCentersRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const navigate = useNavigate();
  const { mutate, isLoading, error } = useDeleteDistributionCenters(rowId, onClose);

  const handleEdit = useCallback(() => {
    navigate(`/inventory/distribution-centers/${rowId}/general/?edit=true`);
  }, [navigate, rowId]);

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
          errors={DELETE_DISTRIBUTION_CENTER_ERRORS}
        />
      </Stack>
    </>
  );
};

export default memo(DistributionCentersRowActions);
