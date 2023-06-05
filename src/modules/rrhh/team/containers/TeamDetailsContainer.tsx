import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { CenterPageLayout } from 'layouts';
import { Divider, Paper, Stack } from '@mui/material';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useFindOneTeam } from 'modules/rrhh/team/hooks/useFindOneTeam';
import { useParams } from 'react-router';
import TeamDetailsSummary from 'modules/rrhh/team/containers/TeamDetailsSummary';
import TeamEditModal from 'modules/rrhh/team/containers/TeamEditModal';
import TeamMembersTable from 'modules/rrhh/team/containers/TeamMembersTable';

const TeamDetailsContainer = () => {
  const { id } = useParams();
  const { isLoading, data } = useFindOneTeam(id || null);
  useBreadcrumbName(data?._id || '', data?.name, isLoading);

  return (
    <>
      <TeamEditModal />
      <CenterPageLayout>
        <DetailLayout>
          <DetailSummary ghost>
            <Paper sx={{ marginBottom: { md: 3 } }}>
              <Stack direction={'column'} divider={<Divider orientation='horizontal' light />} spacing={0}>
                <TeamDetailsSummary />
              </Stack>
            </Paper>
          </DetailSummary>
          <DetailContent ghost>
            <TeamMembersTable />
          </DetailContent>
        </DetailLayout>
      </CenterPageLayout>
    </>
  );
};

export default memo(TeamDetailsContainer);
