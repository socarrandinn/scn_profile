import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { CenterPageLayout } from 'layouts';
import { Divider, Paper, Stack } from '@mui/material';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useFindOneTeam } from 'modules/store/employee/team/hooks/useFindOneTeam';
import { useParams } from 'react-router';
import TeamDetailsSummary from 'modules/store/employee/team/containers/TeamDetailsSummary';
import TeamEditModal from 'modules/store/employee/team/containers/TeamEditModal';
import TeamMembersTable from 'modules/store/employee/team/containers/TeamMembersTable';
import { useTeamDetail } from 'modules/store/employee/team/contexts/TeamDetailsContext';
import { useSearchParams } from 'react-router-dom';

const TeamDetailsContainer = () => {
  const { isLoading, data, error } = useTeamDetail();
  const [searchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  useBreadcrumbName(data?._id || '', data?.name, isLoading);

  return (
        <>
            <TeamEditModal data={data} error={error} isLoading={isLoading} entityId={entityId}/>
            <CenterPageLayout>
                <DetailLayout>
                    <DetailSummary ghost>
                        <Paper sx={{ marginBottom: { md: 3 } }}>
                            <Stack direction={'column'} divider={<Divider orientation='horizontal' light/>} spacing={0}>
                                <TeamDetailsSummary/>
                            </Stack>
                        </Paper>
                    </DetailSummary>
                    <DetailContent ghost>
                        <TeamMembersTable/>
                    </DetailContent>
                </DetailLayout>
            </CenterPageLayout>
        </>
  );
};

export default memo(TeamDetailsContainer);
