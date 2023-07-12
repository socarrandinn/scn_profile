import { memo } from 'react';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';
import { Divider } from '@mui/material';
import { TeamInfo } from 'modules/store/employee/team/components/TeamInfo';
import { useTeamDetail } from 'modules/store/employee/team/contexts/TeamDetailsContext';
import { TeamDetailsAction } from 'modules/store/employee/team/components/TeamDetailsAction';
import { PermissionCheck } from '@dfl/react-security';
import { TEAM_PERMISSIONS } from 'modules/store/employee/team/constants';

const TeamDetailsSummary = () => {
  const { isLoading } = useTeamDetail();

  if (isLoading) {
    return <SummaryWithAvatarSkeleton/>;
  }

  return (
        <>
            <TeamInfo/>
            <Divider/>
            <PermissionCheck permissions={TEAM_PERMISSIONS.TEAM_WRITE}>
                <TeamDetailsAction/>
            </PermissionCheck>
        </>
  );
};

export default memo(TeamDetailsSummary);
