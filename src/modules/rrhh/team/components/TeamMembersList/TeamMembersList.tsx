import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindEmployeeByTeam } from 'modules/rrhh/employee/management/hooks/useFindEmployeeByTeam';
import { teamMemberColumns } from 'modules/rrhh/team/constants/team_member.columns';
import { TeamMemberListToolbar } from 'modules/rrhh/team/components/TeamMemberListToolbar';

type Props = {
  teamId: string;
};

const TeamMembersList = ({ teamId }: Props) => {
  const { isLoading, error, data } = useFindEmployeeByTeam(teamId);

  return (
    <Box>
      <TeamMemberListToolbar teamId={teamId} />
      <Table
        columns={teamMemberColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(TeamMembersList);
