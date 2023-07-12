import { memo } from 'react';
import { Paper } from '@mui/material';
import { TableProvider } from '@dfl/mui-admin-layout';
import { useTeamDetail } from 'modules/store/employee/team/contexts/TeamDetailsContext';
import { TeamMembersList } from 'modules/store/employee/team/components/TeamMembersList';

const TeamMembersTable = () => {
  const { teamId } = useTeamDetail();

  return (
    <Paper sx={{ marginBottom: 3, padding: 4 }}>
      <TableProvider id={'team-members'}>
        <TeamMembersList teamId={teamId} />
      </TableProvider>
    </Paper>
  );
};

export default memo(TeamMembersTable);
