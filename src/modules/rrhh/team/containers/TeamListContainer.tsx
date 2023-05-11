import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindTeams } from 'modules/rrhh/team/hooks/useFindTeams';
import { teamColumns } from 'modules/rrhh/team/constants/team.columns';
import { TeamListToolbar } from 'modules/rrhh/team/components/TeamListToolbar';
import TeamEditModal from 'modules/rrhh/team/containers/TeamEditModal';

const TeamListContainer = () => {
  const { isLoading, error, data } = useFindTeams();
  return (
    <Box>
      <TeamListToolbar />
      <Table
        columns={teamColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <TeamEditModal />
    </Box>
  );
};

export default memo(TeamListContainer);
