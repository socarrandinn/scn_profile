import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { useDeleteManyTeamMembers } from 'modules/store/employee/team/hooks/useDeleteManyTeamMembers';
import { useTeamDetail } from 'modules/store/employee/team/contexts/TeamDetailsContext';

type Props = {
  rowId: string;
};

const TeamMemberRowActions = ({ rowId }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { teamId } = useTeamDetail();

  const { mutate, isLoading, error } = useDeleteManyTeamMembers(teamId, rowId);

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

export default memo(TeamMemberRowActions);
