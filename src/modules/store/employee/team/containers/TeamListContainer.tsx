import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindTeams } from 'modules/store/employee/team/hooks/useFindTeams';
import { teamColumns } from 'modules/store/employee/team/constants/team.columns';
import { TeamListToolbar } from 'modules/store/employee/team/components/TeamListToolbar';
import TeamEditModal from 'modules/store/employee/team/containers/TeamEditModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneTeam } from 'modules/store/employee/team/hooks/useFindOneTeam';

const TeamListContainer = () => {
  const { isLoading, error, data } = useFindTeams();
  const [searchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading: loadingEdit, data: teamEdit, error: errorEdit } = useFindOneTeam(entityId);
  return (
    <Box>
        <pre>{JSON.stringify(entityId, null, 2)}</pre>
      <TeamListToolbar />
      <Table
        columns={teamColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <TeamEditModal error={errorEdit} data={teamEdit} entityId={entityId} isLoading={loadingEdit}/>
    </Box>
  );
};

export default memo(TeamListContainer);
