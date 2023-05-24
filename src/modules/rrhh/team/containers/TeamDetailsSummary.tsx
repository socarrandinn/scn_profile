import { memo } from 'react';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';
import { Divider } from '@mui/material';
import { TeamInfo } from 'modules/rrhh/team/components/TeamInfo';
import { useTeamDetail } from 'modules/rrhh/team/contexts/TeamDetailsContext';
import { TeamDetailsAction } from 'modules/rrhh/team/components/TeamDetailsAction';

const TeamDetailsSummary = () => {
  const { isLoading } = useTeamDetail();

  if (isLoading) {
    return <SummaryWithAvatarSkeleton />;
  }

  return (
    <>
      <TeamInfo />
      <Divider />
      <TeamDetailsAction />
    </>
  );
};

export default memo(TeamDetailsSummary);
